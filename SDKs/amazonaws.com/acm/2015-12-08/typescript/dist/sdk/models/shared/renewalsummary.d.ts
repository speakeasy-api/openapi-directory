import { SpeakeasyBase } from "../../../internal/utils";
import { DomainValidation } from "./domainvalidation";
import { FailureReasonEnum } from "./failurereasonenum";
import { RenewalStatusEnum } from "./renewalstatusenum";
/**
 * Contains information about the status of ACM's <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-renewal.html">managed renewal</a> for the certificate. This structure exists only when the certificate type is <code>AMAZON_ISSUED</code>.
 */
export declare class RenewalSummary extends SpeakeasyBase {
    domainValidationOptions: DomainValidation[];
    renewalStatus: RenewalStatusEnum;
    renewalStatusReason?: FailureReasonEnum;
    updatedAt: Date;
}
