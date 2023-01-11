import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePaymentPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeletePaymentRequest extends SpeakeasyBase {
    pathParams: DeletePaymentPathParams;
}
export declare class DeletePaymentResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    paymentHistories?: shared.PaymentHistory[];
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
}
