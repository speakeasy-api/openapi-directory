import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureChannelCatalogCategoryRequest extends SpeakeasyBase {
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
    configureCategoryRequest: shared.ConfigureCategoryRequest;
}
export declare class ConfigureChannelCatalogCategoryResponse extends SpeakeasyBase {
    /**
     * BadRequest. See Error Response for more details
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
