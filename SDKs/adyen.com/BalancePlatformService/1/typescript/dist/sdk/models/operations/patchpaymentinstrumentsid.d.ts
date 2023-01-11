import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchPaymentInstrumentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchPaymentInstrumentsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PatchPaymentInstrumentsIdRequest extends SpeakeasyBase {
    pathParams: PatchPaymentInstrumentsIdPathParams;
    request?: any;
    security: PatchPaymentInstrumentsIdSecurity;
}
export declare class PatchPaymentInstrumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    paymentInstrument?: any;
    restServiceError?: any;
    statusCode: number;
}
