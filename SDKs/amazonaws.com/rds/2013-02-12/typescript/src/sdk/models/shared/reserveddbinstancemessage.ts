import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReservedDbInstanceList } from "./reserveddbinstancelist";



export class ReservedDbInstanceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ReservedDbInstanceList })
  reservedDBInstances?: ReservedDbInstanceList[];
}
