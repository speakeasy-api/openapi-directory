import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetPaymentRequest extends SpeakeasyBase {
    pathParams: GetPaymentPathParams;
}
export declare class GetPaymentResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    paymentHistories?: shared.PaymentHistory[];
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
