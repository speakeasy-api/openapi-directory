import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceUnderTest } from "./deviceundertest";
import { ProtocolEnum } from "./protocolenum";
/**
 * Gets the suite definition configuration.
 */
export declare class SuiteDefinitionConfiguration extends SpeakeasyBase {
    devicePermissionRoleArn: string;
    devices?: DeviceUnderTest[];
    intendedForQualification?: boolean;
    isLongDurationTest?: boolean;
    protocol?: ProtocolEnum;
    rootGroup: string;
    suiteDefinitionName: string;
}
