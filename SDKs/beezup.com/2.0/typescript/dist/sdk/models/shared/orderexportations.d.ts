import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonPaginationResult } from "./beezupcommonpaginationresult";
import { OrderExportationReporting } from "./orderexportationreporting";
import { OrderExportationsLinks } from "./orderexportationslinks";
/**
 * The list of Order report exportations.\
 *
 * @remarks
 * The paginationResult properties can be null if the list is empty.
 *
 */
export declare class OrderExportations extends SpeakeasyBase {
    exportations: OrderExportationReporting[];
    links: OrderExportationsLinks;
    paginationResult?: BeezUPCommonPaginationResult;
}
