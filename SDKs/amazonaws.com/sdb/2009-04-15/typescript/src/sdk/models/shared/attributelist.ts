import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AttributeList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alternateNameEncoding?: Record<string, any>;

  @SpeakeasyMetadata()
  alternateValueEncoding?: Record<string, any>;

  @SpeakeasyMetadata()
  name: string;

  @SpeakeasyMetadata()
  value: string;
}
