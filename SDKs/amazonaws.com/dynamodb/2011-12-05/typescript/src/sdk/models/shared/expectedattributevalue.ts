import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";



export class ExpectedAttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Exists" })
  exists?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: AttributeValue;
}
