import { SpeakeasyBase } from "../../../internal/utils";
import { AssociatedStandard } from "./associatedstandard";
import { ComplianceStatusEnum } from "./compliancestatusenum";
import { StatusReason } from "./statusreason";
/**
 * Contains finding details that are specific to control-based findings. Only returned for findings generated from controls.
 */
export declare class Compliance extends SpeakeasyBase {
    associatedStandards?: AssociatedStandard[];
    relatedRequirements?: string[];
    securityControlId?: string;
    status?: ComplianceStatusEnum;
    statusReasons?: StatusReason[];
}
