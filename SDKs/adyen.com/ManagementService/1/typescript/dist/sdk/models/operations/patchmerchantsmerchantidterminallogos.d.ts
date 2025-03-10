import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchMerchantsMerchantIdTerminalLogosSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchMerchantsMerchantIdTerminalLogosRequest extends SpeakeasyBase {
    logo?: shared.Logo;
    /**
     * The unique identifier of the merchant account.
     */
    merchantId: string;
    /**
     * The terminal model. Allowed values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.
     */
    model: string;
}
export declare class PatchMerchantsMerchantIdTerminalLogosResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    logo?: shared.Logo;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
