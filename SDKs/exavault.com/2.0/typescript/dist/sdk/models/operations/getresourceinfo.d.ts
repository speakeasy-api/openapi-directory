import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourceInfoQueryParams extends SpeakeasyBase {
    include?: string;
    resource: string;
}
export declare class GetResourceInfoHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetResourceInfoRequest extends SpeakeasyBase {
    queryParams: GetResourceInfoQueryParams;
    headers: GetResourceInfoHeaders;
}
export declare class GetResourceInfoResponse extends SpeakeasyBase {
    contentType: string;
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
}
