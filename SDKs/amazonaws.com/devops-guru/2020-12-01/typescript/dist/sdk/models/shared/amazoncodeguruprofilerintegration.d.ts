import { SpeakeasyBase } from "../../../internal/utils";
import { EventSourceOptInStatusEnum } from "./eventsourceoptinstatusenum";
/**
 * Information about your account's integration with Amazon CodeGuru Profiler. This returns whether DevOps Guru is configured to consume recommendations generated from Amazon CodeGuru Profiler.
 */
export declare class AmazonCodeGuruProfilerIntegration extends SpeakeasyBase {
    status?: EventSourceOptInStatusEnum;
}
