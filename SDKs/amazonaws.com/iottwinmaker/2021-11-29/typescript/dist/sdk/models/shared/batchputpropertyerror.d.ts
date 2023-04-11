import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyValueEntry } from "./propertyvalueentry";
/**
 * An error returned by the <code>BatchPutProperty</code> action.
 */
export declare class BatchPutPropertyError extends SpeakeasyBase {
    entry: PropertyValueEntry;
    errorCode: string;
    errorMessage: string;
}
