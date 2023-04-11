import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
/**
 * Success
 */
export declare class GetParametersResult extends SpeakeasyBase {
    invalidParameters?: string[];
    parameters?: Parameter[];
}
