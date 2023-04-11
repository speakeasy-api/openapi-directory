import { SpeakeasyBase } from "../../../internal/utils";
import { DataConnector } from "./dataconnector";
import { ScopeEnum } from "./scopeenum";
/**
 * The function response.
 */
export declare class FunctionResponse extends SpeakeasyBase {
    implementedBy?: DataConnector;
    isInherited?: boolean;
    requiredProperties?: string[];
    scope?: ScopeEnum;
}
