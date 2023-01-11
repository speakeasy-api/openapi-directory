import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSessionLogsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    ipAddress?: string;
    limit?: number;
    offset?: number;
    path?: string;
    sort?: string;
    startDate?: Date;
    type?: string;
    username?: string;
}
export declare class GetSessionLogsHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetSessionLogsRequest extends SpeakeasyBase {
    queryParams: GetSessionLogsQueryParams;
    headers: GetSessionLogsHeaders;
}
export declare class GetSessionLogsResponse extends SpeakeasyBase {
    contentType: string;
    sessionActivityResponse?: shared.SessionActivityResponse;
    statusCode: number;
}
