import { SpeakeasyBase } from "../../../internal/utils";
import { EnrollmentJobFraudDetectionConfig } from "./enrollmentjobfrauddetectionconfig";
import { ExistingEnrollmentActionEnum } from "./existingenrollmentactionenum";
/**
 * Contains configurations defining enrollment behavior for the batch job.
 */
export declare class EnrollmentConfig extends SpeakeasyBase {
    existingEnrollmentAction?: ExistingEnrollmentActionEnum;
    fraudDetectionConfig?: EnrollmentJobFraudDetectionConfig;
}
