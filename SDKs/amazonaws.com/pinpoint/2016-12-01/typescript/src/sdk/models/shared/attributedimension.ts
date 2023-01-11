import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeTypeEnum } from "./attributetypeenum";



export class AttributeDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributeType" })
  attributeType?: AttributeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}
