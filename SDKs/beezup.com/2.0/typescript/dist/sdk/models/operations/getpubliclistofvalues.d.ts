import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicListOfValuesPathParams extends SpeakeasyBase {
    listName: string;
}
export declare class GetPublicListOfValuesHeaders extends SpeakeasyBase {
    acceptLanguage?: string[];
    ifNoneMatch?: string;
}
export declare class GetPublicListOfValuesRequest extends SpeakeasyBase {
    pathParams: GetPublicListOfValuesPathParams;
    headers: GetPublicListOfValuesHeaders;
}
export declare class GetPublicListOfValuesResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    publicListOfValuesResponse?: shared.PublicListOfValuesResponse;
}
