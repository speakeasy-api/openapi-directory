import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalTerminalAction } from "./externalterminalaction";
/**
 * OK - the request has succeeded.
 */
export declare class ListExternalTerminalActionsResponse extends SpeakeasyBase {
    /**
     * The list of terminal actions.
     */
    data?: ExternalTerminalAction[];
}
