import { SpeakeasyBase } from "../../../internal/utils";
import { OrderIndexLinks } from "./orderindexlinks";
import { OrderIndexLovLinks } from "./orderindexlovlinks";
/**
 * Order index
 */
export declare class OrderIndex extends SpeakeasyBase {
    /**
     * Gives you all entry point operations you can do on this API
     */
    links: OrderIndexLinks;
    /**
     * Gives you all the LOV to get the translations realated to operation name, codes, property names and statuses.
     */
    lovLinks: OrderIndexLovLinks;
}
