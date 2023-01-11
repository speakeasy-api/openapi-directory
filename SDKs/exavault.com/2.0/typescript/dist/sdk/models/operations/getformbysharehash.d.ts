import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFormByShareHashIncludeEnum {
    Share = "share"
}
export declare class GetFormByShareHashQueryParams extends SpeakeasyBase {
    include?: GetFormByShareHashIncludeEnum;
    shareHash: string;
}
export declare class GetFormByShareHashHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetFormByShareHashRequest extends SpeakeasyBase {
    queryParams: GetFormByShareHashQueryParams;
    headers: GetFormByShareHashHeaders;
}
export declare class GetFormByShareHashResponse extends SpeakeasyBase {
    contentType: string;
    formResponse?: shared.FormResponse;
    statusCode: number;
}
