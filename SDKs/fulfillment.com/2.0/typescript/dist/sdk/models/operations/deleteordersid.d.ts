import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteOrdersIdSecurity extends SpeakeasyBase {
    fdcAuth: string;
}
export declare class DeleteOrdersIdRequest extends SpeakeasyBase {
    /**
     * ID of order that needs to be canceled
     */
    id: number;
}
export declare class DeleteOrdersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Could not cancel your order, perhaps it already shipped
     */
    oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
    /**
     * Your order was successfully canceled
     */
    oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
