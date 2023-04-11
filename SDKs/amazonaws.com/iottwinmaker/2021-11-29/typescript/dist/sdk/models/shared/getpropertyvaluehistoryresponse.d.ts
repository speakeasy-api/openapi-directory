import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyValueHistory } from "./propertyvaluehistory";
/**
 * Success
 */
export declare class GetPropertyValueHistoryResponse extends SpeakeasyBase {
    nextToken?: string;
    propertyValues: PropertyValueHistory[];
}
