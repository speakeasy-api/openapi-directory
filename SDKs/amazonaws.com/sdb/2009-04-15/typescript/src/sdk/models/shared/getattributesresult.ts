import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeList } from "./attributelist";



export class GetAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttributeList })
  attributes?: AttributeList[];
}
