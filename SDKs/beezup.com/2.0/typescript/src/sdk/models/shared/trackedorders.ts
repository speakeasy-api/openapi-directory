import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackedOrder } from "./trackedorder";



export class TrackedOrders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orders", elemType: TrackedOrder })
  orders: TrackedOrder[];
}
