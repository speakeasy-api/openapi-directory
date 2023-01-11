import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRestoreStatusList } from "./tablerestorestatuslist";



// TableRestoreStatusMessage
/** 
 * <p/>
**/
export class TableRestoreStatusMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: TableRestoreStatusList })
  tableRestoreStatusDetails?: TableRestoreStatusList[];
}
