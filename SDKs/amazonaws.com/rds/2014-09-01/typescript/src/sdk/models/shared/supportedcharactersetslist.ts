import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SupportedCharacterSetsList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  characterSetDescription?: string;

  @SpeakeasyMetadata()
  characterSetName?: string;
}
