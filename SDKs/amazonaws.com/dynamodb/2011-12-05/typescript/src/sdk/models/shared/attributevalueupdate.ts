import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeActionEnum } from "./attributeactionenum";
import { AttributeValue } from "./attributevalue";



export class AttributeValueUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: AttributeActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: AttributeValue;
}
