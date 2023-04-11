import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about the custom field setting being removed.
 */
export declare class RemoveCustomFieldSettingForPortfolioRequestBody extends SpeakeasyBase {
    data?: shared.RemoveCustomFieldSettingRequest;
}
export declare class RemoveCustomFieldSettingForPortfolioRequest extends SpeakeasyBase {
    /**
     * Information about the custom field setting being removed.
     */
    requestBody: RemoveCustomFieldSettingForPortfolioRequestBody;
    /**
     * Provides “pretty” output.
     *
     * @remarks
     * Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
     */
    optPretty?: boolean;
    /**
     * Globally unique identifier for the portfolio.
     */
    portfolioGid: string;
}
/**
 * Successfully removed the custom field from the portfolio.
 */
export declare class RemoveCustomFieldSettingForPortfolio200ApplicationJSON extends SpeakeasyBase {
    /**
     * An empty object. Some endpoints do not return an object on success. The success is conveyed through a 2-- status code and returning an empty object.
     */
    data?: Record<string, any>;
}
export declare class RemoveCustomFieldSettingForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully removed the custom field from the portfolio.
     */
    removeCustomFieldSettingForPortfolio200ApplicationJSONObject?: RemoveCustomFieldSettingForPortfolio200ApplicationJSON;
}
