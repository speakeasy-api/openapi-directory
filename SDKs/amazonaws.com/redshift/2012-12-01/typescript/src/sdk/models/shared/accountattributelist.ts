import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttributeList } from "./attributelist";



export class AccountAttributeList extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: AttributeList })
  accountAttributes?: AttributeList[];
}
