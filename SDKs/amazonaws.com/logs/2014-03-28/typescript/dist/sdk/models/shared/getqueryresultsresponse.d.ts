import { SpeakeasyBase } from "../../../internal/utils";
import { QueryStatistics } from "./querystatistics";
import { QueryStatusEnum } from "./querystatusenum";
import { ResultField } from "./resultfield";
/**
 * Success
 */
export declare class GetQueryResultsResponse extends SpeakeasyBase {
    results?: ResultField[][];
    statistics?: QueryStatistics;
    status?: QueryStatusEnum;
}
