import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationStatusEnum } from "./verificationstatusenum";



export class IdentityDkimAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dkimEnabled?: boolean;

  @SpeakeasyMetadata()
  dkimTokens?: string[];

  @SpeakeasyMetadata()
  dkimVerificationStatus?: VerificationStatusEnum;
}
