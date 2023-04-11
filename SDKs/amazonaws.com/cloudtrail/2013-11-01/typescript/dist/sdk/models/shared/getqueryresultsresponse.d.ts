import { SpeakeasyBase } from "../../../internal/utils";
import { QueryStatistics } from "./querystatistics";
import { QueryStatusEnum } from "./querystatusenum";
/**
 * Success
 */
export declare class GetQueryResultsResponse extends SpeakeasyBase {
    errorMessage?: string;
    nextToken?: string;
    queryResultRows?: Record<string, string>[][];
    queryStatistics?: QueryStatistics;
    queryStatus?: QueryStatusEnum;
}
