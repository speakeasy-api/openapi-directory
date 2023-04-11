import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeGroupSummary } from "./attributegroupsummary";
/**
 * Success
 */
export declare class ListAttributeGroupsResponse extends SpeakeasyBase {
    attributeGroups?: AttributeGroupSummary[];
    nextToken?: string;
}
