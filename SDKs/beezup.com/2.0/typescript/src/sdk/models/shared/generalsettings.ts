import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeneralSettings
/** 
 * Represents the general settings of your channel catalog
**/
export class GeneralSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptToPublishInfo" })
  acceptToPublishInfo: boolean;

  @SpeakeasyMetadata({ data: "json, name=activeBeezUPTracking" })
  activeBeezUPTracking: boolean;

  @SpeakeasyMetadata({ data: "json, name=doNotExportOutOfStockProducts" })
  doNotExportOutOfStockProducts: boolean;
}
