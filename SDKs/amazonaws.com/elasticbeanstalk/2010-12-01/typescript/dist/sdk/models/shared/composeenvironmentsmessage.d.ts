import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to create or update a group of environments.
 */
export declare class ComposeEnvironmentsMessage extends SpeakeasyBase {
    applicationName?: string;
    groupName?: string;
    versionLabels?: string[];
}
