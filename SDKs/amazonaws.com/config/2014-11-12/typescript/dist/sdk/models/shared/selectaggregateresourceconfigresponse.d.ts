import { SpeakeasyBase } from "../../../internal/utils";
import { QueryInfo } from "./queryinfo";
/**
 * Success
 */
export declare class SelectAggregateResourceConfigResponse extends SpeakeasyBase {
    nextToken?: string;
    /**
     * Details about the query.
     */
    queryInfo?: QueryInfo;
    results?: string[];
}
