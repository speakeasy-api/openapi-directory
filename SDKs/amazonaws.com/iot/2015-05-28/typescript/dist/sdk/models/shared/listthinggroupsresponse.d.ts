import { SpeakeasyBase } from "../../../internal/utils";
import { GroupNameAndArn } from "./groupnameandarn";
/**
 * Success
 */
export declare class ListThingGroupsResponse extends SpeakeasyBase {
    nextToken?: string;
    thingGroups?: GroupNameAndArn[];
}
