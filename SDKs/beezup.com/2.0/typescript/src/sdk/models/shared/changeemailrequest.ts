import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChangeEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newEmail" })
  newEmail: string;
}
