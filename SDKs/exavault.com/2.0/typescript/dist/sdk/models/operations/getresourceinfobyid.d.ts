import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourceInfoByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetResourceInfoByIdQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetResourceInfoByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetResourceInfoByIdRequest extends SpeakeasyBase {
    pathParams: GetResourceInfoByIdPathParams;
    queryParams: GetResourceInfoByIdQueryParams;
    headers: GetResourceInfoByIdHeaders;
}
export declare class GetResourceInfoByIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceResponse?: shared.ResourceResponse;
    statusCode: number;
}
