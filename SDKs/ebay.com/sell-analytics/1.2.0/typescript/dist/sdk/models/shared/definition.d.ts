import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that defines a dimension key and metrics in a traffic report.
 */
export declare class Definition extends SpeakeasyBase {
    /**
     * Indicates the data type of the returned dimension. For example, if the dimension is day, the data type is DATE. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/DataTypeEnum.html'>eBay API documentation</a>
     */
    dataType?: string;
    /**
     * The value the dimension or metric parameter as submitted in the request.
     */
    key?: string;
    /**
     * The localized name of the metric or dimension (translated into the language specified in the Accept-Language HTTP request header). For example, if Accept-Language is set to de-DE, the value &quot;day&quot; in the dimension container is returned as &quot;tag&quot;, and a metric of TRANSACTION is returned as &quot;Transaktionsanzahl&quot;.
     */
    localizedName?: string;
}
