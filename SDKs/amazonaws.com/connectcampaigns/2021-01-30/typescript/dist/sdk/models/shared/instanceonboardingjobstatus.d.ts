import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceOnboardingJobFailureCodeEnum } from "./instanceonboardingjobfailurecodeenum";
import { InstanceOnboardingJobStatusCodeEnum } from "./instanceonboardingjobstatuscodeenum";
/**
 * Instance onboarding job status object
 */
export declare class InstanceOnboardingJobStatus extends SpeakeasyBase {
    /**
     * Amazon Connect Instance Id
     */
    connectInstanceId: string;
    /**
     * Enumeration of the possible failure codes for instance onboarding job
     */
    failureCode?: InstanceOnboardingJobFailureCodeEnum;
    /**
     * Enumeration of the possible states for instance onboarding job
     */
    status: InstanceOnboardingJobStatusCodeEnum;
}
