import { SpeakeasyBase } from "../../../internal/utils";
import { BehaviorOnMxFailureEnum } from "./behavioronmxfailureenum";
import { CustomMailFromStatusEnum } from "./custommailfromstatusenum";
export declare class IdentityMailFromDomainAttributes extends SpeakeasyBase {
    behaviorOnMXFailure?: BehaviorOnMxFailureEnum;
    mailFromDomain?: string;
    mailFromDomainStatus?: CustomMailFromStatusEnum;
}
