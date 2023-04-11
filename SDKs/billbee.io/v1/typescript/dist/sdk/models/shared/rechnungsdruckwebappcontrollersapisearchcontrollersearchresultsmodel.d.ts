import { SpeakeasyBase } from "../../../internal/utils";
import { RechnungsdruckWebAppControllersApiSearchControllerCustomerResult } from "./rechnungsdruckwebappcontrollersapisearchcontrollercustomerresult";
import { RechnungsdruckWebAppControllersApiSearchControllerOrderResult } from "./rechnungsdruckwebappcontrollersapisearchcontrollerorderresult";
import { RechnungsdruckWebAppControllersApiSearchControllerProductResult } from "./rechnungsdruckwebappcontrollersapisearchcontrollerproductresult";
export declare class RechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel extends SpeakeasyBase {
    customers?: RechnungsdruckWebAppControllersApiSearchControllerCustomerResult[];
    orders?: RechnungsdruckWebAppControllersApiSearchControllerOrderResult[];
    products?: RechnungsdruckWebAppControllersApiSearchControllerProductResult[];
}
