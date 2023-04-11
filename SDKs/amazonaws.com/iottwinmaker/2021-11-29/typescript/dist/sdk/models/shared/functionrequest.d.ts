import { SpeakeasyBase } from "../../../internal/utils";
import { DataConnector } from "./dataconnector";
import { ScopeEnum } from "./scopeenum";
/**
 * The function request body.
 */
export declare class FunctionRequest extends SpeakeasyBase {
    implementedBy?: DataConnector;
    requiredProperties?: string[];
    scope?: ScopeEnum;
}
