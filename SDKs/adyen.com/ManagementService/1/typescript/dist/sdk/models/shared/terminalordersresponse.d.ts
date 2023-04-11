import { SpeakeasyBase } from "../../../internal/utils";
import { TerminalOrder } from "./terminalorder";
/**
 * OK - the request has succeeded.
 */
export declare class TerminalOrdersResponse extends SpeakeasyBase {
    /**
     * List of orders for payment terminal packages and parts.
     */
    data?: TerminalOrder[];
}
