import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { OrderIdentifier } from "./orderidentifier";
/**
 * The response given by the batch operation for an order
 */
export declare class OrderOperationResponse extends SpeakeasyBase {
    /**
     * The error list
     */
    errors?: BeezUPCommonUserErrorMessage[];
    order: OrderIdentifier;
    /**
     * Indicates the http status corresponding to the individual operation
     */
    status: number;
    /**
     * Indicates if the operation succeed or not
     */
    success: boolean;
}
