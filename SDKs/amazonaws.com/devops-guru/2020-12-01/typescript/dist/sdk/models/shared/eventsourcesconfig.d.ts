import { SpeakeasyBase } from "../../../internal/utils";
import { AmazonCodeGuruProfilerIntegration } from "./amazoncodeguruprofilerintegration";
/**
 * Information about the integration of DevOps Guru as consumer with another AWS service, such as AWS CodeGuru Profiler via EventBridge.
 */
export declare class EventSourcesConfig extends SpeakeasyBase {
    amazonCodeGuruProfiler?: AmazonCodeGuruProfilerIntegration;
}
