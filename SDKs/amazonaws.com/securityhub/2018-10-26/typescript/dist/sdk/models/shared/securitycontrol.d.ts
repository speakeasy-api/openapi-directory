import { SpeakeasyBase } from "../../../internal/utils";
import { ControlStatusEnum } from "./controlstatusenum";
import { SeverityRatingEnum } from "./severityratingenum";
/**
 *  A security control in Security Hub describes a security best practice related to a specific resource.
 */
export declare class SecurityControl extends SpeakeasyBase {
    description: string;
    remediationUrl: string;
    securityControlArn: string;
    securityControlId: string;
    securityControlStatus: ControlStatusEnum;
    severityRating: SeverityRatingEnum;
    title: string;
}
