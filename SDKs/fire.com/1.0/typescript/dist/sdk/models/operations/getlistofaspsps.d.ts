import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetListOfAspspsRequest extends SpeakeasyBase {
    /**
     * The three letter code for the currency - either `EUR` or `GBP`. Use this to filter the list for banks that can be used to pay in a certain currency.
     */
    currency?: string;
}
export declare class GetListOfAspspsAspspsAspspCountry extends SpeakeasyBase {
    /**
     * The 2-letter code for the country - e.g. `IE`, `GP`...
     */
    code?: string;
    /**
     * The name of the country
     */
    description?: string;
}
/**
 * The three letter code for the currency - either `EUR` or `GBP`.
 */
export declare enum GetListOfAspspsAspspsAspspCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
/**
 * The currency.
 */
export declare class GetListOfAspspsAspspsAspspCurrency extends SpeakeasyBase {
    /**
     * The three letter code for the currency - either `EUR` or `GBP`.
     */
    code?: GetListOfAspspsAspspsAspspCurrencyCodeEnum;
    /**
     * The name of the currency
     */
    description?: string;
}
export declare class GetListOfAspspsAspspsAspsp extends SpeakeasyBase {
    /**
     * The name of the ASPSP / bank.
     */
    alias?: string;
    /**
     * The UUID associated with the ASPSP / bank.
     */
    aspspUuid?: string;
    country?: GetListOfAspspsAspspsAspspCountry;
    /**
     * The currency.
     */
    currency?: GetListOfAspspsAspspsAspspCurrency;
    /**
     * The date the ASPSP / bank was created.
     */
    dateCreated?: Date;
    /**
     * The date the ASPSP / bank was last updated.
     */
    lastUpdated?: Date;
    /**
     * A link to the ASPSP / bank's logo in SVG format.
     */
    logoUrl?: string;
}
/**
 * A list of ASPSPs the customers can use to pay a payment.
 *
 * @remarks
 *
 */
export declare class GetListOfAspspsAspsps extends SpeakeasyBase {
    aspsps?: GetListOfAspspsAspspsAspsp[];
    /**
     * The total number of ASPSPs in the list.
     */
    total?: number;
}
export declare class GetListOfAspspsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of ASPSPs the customers can use to pay a payment.
     *
     * @remarks
     *
     */
    aspsps?: GetListOfAspspsAspsps;
}
