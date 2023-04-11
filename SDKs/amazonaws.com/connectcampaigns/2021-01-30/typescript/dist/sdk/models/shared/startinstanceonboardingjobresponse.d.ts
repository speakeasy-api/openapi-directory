import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceOnboardingJobStatus } from "./instanceonboardingjobstatus";
/**
 * The response for StartInstanceOnboardingJob API.
 */
export declare class StartInstanceOnboardingJobResponse extends SpeakeasyBase {
    /**
     * Instance onboarding job status object
     */
    connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus;
}
