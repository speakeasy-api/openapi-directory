import { SpeakeasyBase } from "../../../internal/utils";
import { VersionControlTypeEnum } from "./versioncontroltypeenum";
/**
 * Details about the version control configuration.
 */
export declare class VersionControlInfo extends SpeakeasyBase {
    versionControlConfigurationTimeStamp?: string;
    versionControlType?: VersionControlTypeEnum;
}
