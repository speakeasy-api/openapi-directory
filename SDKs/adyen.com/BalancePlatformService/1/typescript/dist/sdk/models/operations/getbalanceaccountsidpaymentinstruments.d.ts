import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBalanceAccountsIdPaymentInstrumentsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBalanceAccountsIdPaymentInstrumentsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetBalanceAccountsIdPaymentInstrumentsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetBalanceAccountsIdPaymentInstrumentsRequest extends SpeakeasyBase {
    pathParams: GetBalanceAccountsIdPaymentInstrumentsPathParams;
    queryParams: GetBalanceAccountsIdPaymentInstrumentsQueryParams;
    security: GetBalanceAccountsIdPaymentInstrumentsSecurity;
}
export declare class GetBalanceAccountsIdPaymentInstrumentsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedPaymentInstrumentsResponse?: any;
    restServiceError?: any;
    statusCode: number;
}
