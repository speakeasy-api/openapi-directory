import { SpeakeasyBase } from "../../../internal/utils";
import { EntitySummary } from "./entitysummary";
/**
 * Success
 */
export declare class ListEntitiesResponse extends SpeakeasyBase {
    entitySummaries?: EntitySummary[];
    nextToken?: string;
}
