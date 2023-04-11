import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerIndexLinks } from "./customerindexlinks";
import { CustomerIndexLovLinks } from "./customerindexlovlinks";
/**
 * The index of the customer API
 */
export declare class CustomerIndex extends SpeakeasyBase {
    /**
     * Gives you want you can do on this API
     */
    links: CustomerIndexLinks;
    lovLinks: CustomerIndexLovLinks;
}
