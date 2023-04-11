import { SpeakeasyBase } from "../../../internal/utils";
import { DirectoryConfigurationStatusEnum } from "./directoryconfigurationstatusenum";
/**
 * Contains information about the specified configurable setting for a directory.
 */
export declare class SettingEntry extends SpeakeasyBase {
    allowedValues?: string;
    appliedValue?: string;
    lastRequestedDateTime?: Date;
    lastUpdatedDateTime?: Date;
    name?: string;
    requestDetailedStatus?: Record<string, DirectoryConfigurationStatusEnum>;
    requestStatus?: DirectoryConfigurationStatusEnum;
    requestStatusMessage?: string;
    requestedValue?: string;
    type?: string;
}
