import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeFpgaImagesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fpgaImages?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
