import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaFunction } from "./lambdafunction";
/**
 * The data connector.
 */
export declare class DataConnector extends SpeakeasyBase {
    isNative?: boolean;
    lambda?: LambdaFunction;
}
