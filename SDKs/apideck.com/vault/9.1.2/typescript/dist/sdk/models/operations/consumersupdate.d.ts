import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConsumersUpdateSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ConsumersUpdateRequest extends SpeakeasyBase {
    updateConsumerRequest: shared.UpdateConsumerRequest;
    /**
     * ID of the consumer to return
     */
    consumerId: string;
    /**
     * The ID of your Unify application
     */
    xApideckAppId: string;
}
export declare class ConsumersUpdateResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    /**
     * The specified resource was not found
     */
    notFoundResponse?: shared.NotFoundResponse;
    /**
     * Payment Required
     */
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    unauthorizedResponse?: shared.UnauthorizedResponse;
    /**
     * Unexpected error
     */
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    /**
     * Unprocessable
     */
    unprocessableResponse?: shared.UnprocessableResponse;
    /**
     * Consumer updated
     */
    updateConsumerResponse?: shared.UpdateConsumerResponse;
}
