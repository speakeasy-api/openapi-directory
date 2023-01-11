import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentInstrumentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPaymentInstrumentsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetPaymentInstrumentsIdRequest extends SpeakeasyBase {
    pathParams: GetPaymentInstrumentsIdPathParams;
    security: GetPaymentInstrumentsIdSecurity;
}
export declare class GetPaymentInstrumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    paymentInstrument?: any;
    restServiceError?: any;
    statusCode: number;
}
