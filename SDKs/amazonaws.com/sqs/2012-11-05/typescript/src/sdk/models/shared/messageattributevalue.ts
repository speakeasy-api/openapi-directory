import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MessageAttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata()
  binaryListValues?: Record<string, any>;

  @SpeakeasyMetadata()
  binaryValue?: string;

  @SpeakeasyMetadata()
  dataType?: string;

  @SpeakeasyMetadata()
  stringListValues?: Record<string, any>;

  @SpeakeasyMetadata()
  stringValue?: string;
}
