import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatsQueryParams extends SpeakeasyBase {
    direction?: shared.FilterDirectionEnum;
    end?: string;
    format?: shared.ResponseFormatEnum;
    limit?: number;
    start?: string;
    unit?: shared.FilterDirectionEnum1;
}
export declare class GetStatsHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class GetStatsRequest extends SpeakeasyBase {
    queryParams: GetStatsQueryParams;
    headers: GetStatsHeaders;
}
export declare class GetStatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getStats2XXApplicationJSONObject?: Record<string, any>;
}
