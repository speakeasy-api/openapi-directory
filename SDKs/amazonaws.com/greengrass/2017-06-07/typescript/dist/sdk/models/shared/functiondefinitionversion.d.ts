import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionT } from "./function";
import { FunctionDefaultConfig } from "./functiondefaultconfig";
/**
 * Information about a function definition version.
 */
export declare class FunctionDefinitionVersion extends SpeakeasyBase {
    defaultConfig?: FunctionDefaultConfig;
    functions?: FunctionT[];
}
