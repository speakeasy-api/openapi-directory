import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
/**
 * A story represents an activity associated with an object in the Asana system.
**/
export declare class StoryCompact extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: UserCompact;
    gid?: string;
    resourceSubtype?: string;
    resourceType?: string;
    text?: string;
}
