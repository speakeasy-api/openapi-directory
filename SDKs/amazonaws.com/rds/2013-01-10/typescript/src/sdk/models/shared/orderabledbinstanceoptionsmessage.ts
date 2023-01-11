import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderableDbInstanceOptionsList } from "./orderabledbinstanceoptionslist";



export class OrderableDbInstanceOptionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: OrderableDbInstanceOptionsList })
  orderableDBInstanceOptions?: OrderableDbInstanceOptionsList[];
}
