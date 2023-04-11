import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that contains information about a canary run.
 */
export declare class CanaryRunConfigOutput extends SpeakeasyBase {
    activeTracing?: boolean;
    memoryInMB?: number;
    timeoutInSeconds?: number;
}
