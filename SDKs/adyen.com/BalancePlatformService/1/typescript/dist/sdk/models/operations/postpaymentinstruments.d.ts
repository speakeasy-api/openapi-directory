import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPaymentInstrumentsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostPaymentInstrumentsRequest extends SpeakeasyBase {
    request?: any;
    security: PostPaymentInstrumentsSecurity;
}
export declare class PostPaymentInstrumentsResponse extends SpeakeasyBase {
    contentType: string;
    paymentInstrument?: any;
    restServiceError?: any;
    statusCode: number;
}
