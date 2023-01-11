import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPaymentInstrumentGroupsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostPaymentInstrumentGroupsRequest extends SpeakeasyBase {
    request?: any;
    security: PostPaymentInstrumentGroupsSecurity;
}
export declare class PostPaymentInstrumentGroupsResponse extends SpeakeasyBase {
    contentType: string;
    paymentInstrumentGroup?: any;
    restServiceError?: any;
    statusCode: number;
}
