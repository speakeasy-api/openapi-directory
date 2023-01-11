import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerIndexLinks } from "./customerindexlinks";
import { CustomerIndexLovLinks } from "./customerindexlovlinks";
/**
 * The index of the customer API
**/
export declare class CustomerIndex extends SpeakeasyBase {
    links: CustomerIndexLinks;
    lovLinks: CustomerIndexLovLinks;
}
