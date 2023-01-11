import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeDrchronoOauth2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
