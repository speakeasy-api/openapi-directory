import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstancesOfferingList } from "./reserveddbinstancesofferinglist";



export class ReservedDbInstancesOfferingMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedDbInstancesOfferingList })
  reservedDBInstancesOfferings?: ReservedDbInstancesOfferingList[];
}
