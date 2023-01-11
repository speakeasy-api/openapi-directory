import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { OrderIdentifier } from "./orderidentifier";
/**
 * The response given by the batch operation for an order
**/
export declare class OrderOperationResponse extends SpeakeasyBase {
    errors?: BeezUpCommonUserErrorMessage[];
    order: OrderIdentifier;
    status: number;
    success: boolean;
}
