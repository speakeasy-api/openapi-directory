import { SpeakeasyBase } from "../../../internal/utils";
import { RegionAvailabilityStatusEnum } from "./regionavailabilitystatusenum";
import { SeverityRatingEnum } from "./severityratingenum";
/**
 *  Provides metadata for a security control, including its unique standard-agnostic identifier, title, description, severity, availability in Amazon Web Services Regions, and a link to remediation steps.
 */
export declare class SecurityControlDefinition extends SpeakeasyBase {
    currentRegionAvailability: RegionAvailabilityStatusEnum;
    description: string;
    remediationUrl: string;
    securityControlId: string;
    severityRating: SeverityRatingEnum;
    title: string;
}
