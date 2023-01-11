import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFormByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetFormByIdQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetFormByIdHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetFormByIdRequest extends SpeakeasyBase {
    pathParams: GetFormByIdPathParams;
    queryParams: GetFormByIdQueryParams;
    headers: GetFormByIdHeaders;
}
export declare class GetFormByIdResponse extends SpeakeasyBase {
    contentType: string;
    formResponse?: shared.FormResponse;
    statusCode: number;
}
