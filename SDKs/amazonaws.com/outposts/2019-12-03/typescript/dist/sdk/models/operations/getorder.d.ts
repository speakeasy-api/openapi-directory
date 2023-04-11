import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderRequest extends SpeakeasyBase {
    /**
     * The ID of the order.
     */
    orderId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getOrderOutput?: shared.GetOrderOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
