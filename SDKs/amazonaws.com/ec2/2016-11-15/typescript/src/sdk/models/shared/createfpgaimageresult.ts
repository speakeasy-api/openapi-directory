import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFpgaImageResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fpgaImageGlobalId?: Record<string, any>;

  @SpeakeasyMetadata()
  fpgaImageId?: Record<string, any>;
}
