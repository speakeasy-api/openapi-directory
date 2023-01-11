import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderExportationReporting } from "./orderexportationreporting";
import { OrderExportationsLinks } from "./orderexportationslinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";



// OrderExportations
/** 
 * The list of Order report exportations.\
 * The paginationResult properties can be null if the list is empty.
 * 
**/
export class OrderExportations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exportations", elemType: OrderExportationReporting })
  exportations: OrderExportationReporting[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: OrderExportationsLinks;

  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult?: BeezUpCommonPaginationResult;
}
