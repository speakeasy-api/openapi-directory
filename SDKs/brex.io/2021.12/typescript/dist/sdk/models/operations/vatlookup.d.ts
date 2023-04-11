import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VatLookupSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * Company name
 */
export declare class VatLookupRequestBody extends SpeakeasyBase {
    /**
     * Company address
     */
    address?: string;
    /**
     * Company name
     */
    name: string;
}
export declare class VatLookupRequest extends SpeakeasyBase {
    /**
     * Company name
     */
    requestBody: VatLookupRequestBody;
    /**
     * ISO_3166-1_alpha-2 representation of a country name - 2 chars
     */
    country: string;
}
/**
 * Detailed information about the error
 */
export declare class VatLookupDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class VatLookup200ApplicationJSONMatches extends SpeakeasyBase {
    company?: shared.Oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany;
    vat?: string;
}
/**
 * Result of a VAT number reverse Lookup
 */
export declare class VatLookup200ApplicationJSON extends SpeakeasyBase {
    matches?: VatLookup200ApplicationJSONMatches[];
    searchtermAddress?: string;
    searchtermCountry?: string;
    searchtermName?: string;
    timestamp?: number;
}
export declare class VatLookupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Result of a VAT number reverse Lookup
     */
    vatLookup200ApplicationJSONObject?: VatLookup200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    vatLookupDefaultApplicationJSONObject?: VatLookupDefaultApplicationJSON;
}
