import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BehaviorOnMxFailureEnum } from "./behavioronmxfailureenum";
import { CustomMailFromStatusEnum } from "./custommailfromstatusenum";



export class IdentityMailFromDomainAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  behaviorOnMXFailure?: BehaviorOnMxFailureEnum;

  @SpeakeasyMetadata()
  mailFromDomain?: string;

  @SpeakeasyMetadata()
  mailFromDomainStatus?: CustomMailFromStatusEnum;
}
