import { SpeakeasyBase } from "../../../internal/utils";
import { OrderExportationReporting } from "./orderexportationreporting";
import { OrderExportationsLinks } from "./orderexportationslinks";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";
/**
 * The list of Order report exportations.\
 * The paginationResult properties can be null if the list is empty.
 *
**/
export declare class OrderExportations extends SpeakeasyBase {
    exportations: OrderExportationReporting[];
    links: OrderExportationsLinks;
    paginationResult?: BeezUpCommonPaginationResult;
}
