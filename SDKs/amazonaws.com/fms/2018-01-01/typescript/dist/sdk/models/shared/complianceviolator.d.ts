import { SpeakeasyBase } from "../../../internal/utils";
import { ViolationReasonEnum } from "./violationreasonenum";
/**
 * Details of the resource that is not protected by the policy.
 */
export declare class ComplianceViolator extends SpeakeasyBase {
    metadata?: Record<string, string>;
    resourceId?: string;
    resourceType?: string;
    violationReason?: ViolationReasonEnum;
}
