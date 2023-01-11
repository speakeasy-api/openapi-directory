import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddCustomFieldSettingForPortfolioPathParams extends SpeakeasyBase {
    portfolioGid: string;
}
export declare class AddCustomFieldSettingForPortfolioQueryParams extends SpeakeasyBase {
    optPretty?: boolean;
}
export declare class AddCustomFieldSettingForPortfolioRequestBody extends SpeakeasyBase {
    data?: shared.AddCustomFieldSettingRequest;
}
export declare class AddCustomFieldSettingForPortfolio200ApplicationJson extends SpeakeasyBase {
    data?: Record<string, any>;
}
export declare class AddCustomFieldSettingForPortfolioRequest extends SpeakeasyBase {
    pathParams: AddCustomFieldSettingForPortfolioPathParams;
    queryParams: AddCustomFieldSettingForPortfolioQueryParams;
    request: AddCustomFieldSettingForPortfolioRequestBody;
}
export declare class AddCustomFieldSettingForPortfolioResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addCustomFieldSettingForPortfolio200ApplicationJSONObject?: AddCustomFieldSettingForPortfolio200ApplicationJson;
}
