import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceUnderTest } from "./deviceundertest";
import { ProtocolEnum } from "./protocolenum";
/**
 * Information about the suite definition.
 */
export declare class SuiteDefinitionInformation extends SpeakeasyBase {
    createdAt?: Date;
    defaultDevices?: DeviceUnderTest[];
    intendedForQualification?: boolean;
    isLongDurationTest?: boolean;
    protocol?: ProtocolEnum;
    suiteDefinitionId?: string;
    suiteDefinitionName?: string;
}
