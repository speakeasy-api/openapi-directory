import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFormEntriesPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetFormEntriesQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetFormEntriesHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetFormEntriesRequest extends SpeakeasyBase {
    pathParams: GetFormEntriesPathParams;
    queryParams: GetFormEntriesQueryParams;
    headers: GetFormEntriesHeaders;
}
export declare class GetFormEntriesResponse extends SpeakeasyBase {
    contentType: string;
    formEntryResponse?: shared.FormEntryResponse;
    statusCode: number;
}
