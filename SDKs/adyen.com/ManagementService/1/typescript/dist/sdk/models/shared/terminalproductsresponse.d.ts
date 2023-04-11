import { SpeakeasyBase } from "../../../internal/utils";
import { TerminalProduct } from "./terminalproduct";
/**
 * OK - the request has succeeded.
 */
export declare class TerminalProductsResponse extends SpeakeasyBase {
    /**
     * Terminal products that can be ordered.
     */
    data?: TerminalProduct[];
}
