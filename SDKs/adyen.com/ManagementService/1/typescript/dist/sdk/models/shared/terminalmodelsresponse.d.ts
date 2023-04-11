import { SpeakeasyBase } from "../../../internal/utils";
import { IdName } from "./idname";
/**
 * OK - the request has succeeded.
 */
export declare class TerminalModelsResponse extends SpeakeasyBase {
    /**
     * The terminal models that the API credential has access to.
     */
    data?: IdName[];
}
