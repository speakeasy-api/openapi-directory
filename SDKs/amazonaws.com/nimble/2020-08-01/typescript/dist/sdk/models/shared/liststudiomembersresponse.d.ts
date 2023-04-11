import { SpeakeasyBase } from "../../../internal/utils";
import { StudioMembership } from "./studiomembership";
/**
 * Success
 */
export declare class ListStudioMembersResponse extends SpeakeasyBase {
    members?: StudioMembership[];
    nextToken?: string;
}
