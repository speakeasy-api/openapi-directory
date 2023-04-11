import { SpeakeasyBase } from "../../../internal/utils";
import { GroupNameAndArn } from "./groupnameandarn";
/**
 * Success
 */
export declare class ListThingGroupsForThingResponse extends SpeakeasyBase {
    nextToken?: string;
    thingGroups?: GroupNameAndArn[];
}
