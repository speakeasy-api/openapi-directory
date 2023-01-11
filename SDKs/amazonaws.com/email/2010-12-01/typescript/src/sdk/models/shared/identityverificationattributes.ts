import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationStatusEnum } from "./verificationstatusenum";



export class IdentityVerificationAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  verificationStatus?: VerificationStatusEnum;

  @SpeakeasyMetadata()
  verificationToken?: string;
}
