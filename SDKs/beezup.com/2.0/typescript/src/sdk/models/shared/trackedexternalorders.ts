import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackedExternalOrder } from "./trackedexternalorder";



export class TrackedExternalOrders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalOrders", elemType: TrackedExternalOrder })
  externalOrders: TrackedExternalOrder[];
}
