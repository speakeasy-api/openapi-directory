import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentInstrumentGroupsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPaymentInstrumentGroupsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetPaymentInstrumentGroupsIdRequest extends SpeakeasyBase {
    pathParams: GetPaymentInstrumentGroupsIdPathParams;
    security: GetPaymentInstrumentGroupsIdSecurity;
}
export declare class GetPaymentInstrumentGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    paymentInstrumentGroup?: any;
    restServiceError?: any;
    statusCode: number;
}
