import { SpeakeasyBase } from "../../../internal/utils";
import { LineageTypeEnum } from "./lineagetypeenum";
/**
 * A set of filters to narrow the set of lineage entities connected to the <code>StartArn</code>(s) returned by the <code>QueryLineage</code> API action.
 */
export declare class QueryFilters extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    lineageTypes?: LineageTypeEnum[];
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    properties?: Record<string, string>;
    types?: string[];
}
