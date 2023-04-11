import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration information for Amazon SageMaker Debugger system monitoring, framework profiling, and storage paths.
 */
export declare class ProfilerConfig extends SpeakeasyBase {
    disableProfiler?: boolean;
    profilingIntervalInMilliseconds?: number;
    profilingParameters?: Record<string, string>;
    s3OutputPath?: string;
}
