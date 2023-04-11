import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about contacts and times that an on-call override replaces.
 */
export declare class PreviewOverride extends SpeakeasyBase {
    endTime?: Date;
    newMembers?: string[];
    startTime?: Date;
}
