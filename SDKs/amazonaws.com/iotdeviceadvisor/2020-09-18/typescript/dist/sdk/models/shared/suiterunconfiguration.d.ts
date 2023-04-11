import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceUnderTest } from "./deviceundertest";
/**
 * Gets suite run configuration.
 */
export declare class SuiteRunConfiguration extends SpeakeasyBase {
    parallelRun?: boolean;
    primaryDevice: DeviceUnderTest;
    selectedTestList?: string[];
}
