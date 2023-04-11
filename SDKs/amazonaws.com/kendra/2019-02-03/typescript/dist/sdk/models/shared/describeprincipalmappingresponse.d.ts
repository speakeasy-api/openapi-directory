import { SpeakeasyBase } from "../../../internal/utils";
import { GroupOrderingIdSummary } from "./grouporderingidsummary";
/**
 * Success
 */
export declare class DescribePrincipalMappingResponse extends SpeakeasyBase {
    dataSourceId?: string;
    groupId?: string;
    groupOrderingIdSummaries?: GroupOrderingIdSummary[];
    indexId?: string;
}
