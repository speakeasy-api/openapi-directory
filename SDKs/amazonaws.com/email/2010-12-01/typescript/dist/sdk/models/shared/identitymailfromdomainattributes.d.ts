import { SpeakeasyBase } from "../../../internal/utils";
import { BehaviorOnMXFailureEnum } from "./behavioronmxfailureenum";
import { CustomMailFromStatusEnum } from "./custommailfromstatusenum";
/**
 * Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).
 */
export declare class IdentityMailFromDomainAttributes extends SpeakeasyBase {
    behaviorOnMXFailure: BehaviorOnMXFailureEnum;
    mailFromDomain: string;
    mailFromDomainStatus: CustomMailFromStatusEnum;
}
