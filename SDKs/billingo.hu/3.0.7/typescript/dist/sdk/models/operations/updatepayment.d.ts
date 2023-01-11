import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePaymentPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdatePaymentRequest extends SpeakeasyBase {
    pathParams: UpdatePaymentPathParams;
    request: shared.PaymentHistory[];
}
export declare class UpdatePaymentResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    paymentHistories?: shared.PaymentHistory[];
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
