import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureChannelCatalogExclusionFiltersRequest extends SpeakeasyBase {
    requestBody: shared.ExclusionFilter[];
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
}
export declare class ConfigureChannelCatalogExclusionFiltersResponse extends SpeakeasyBase {
    /**
     * BadRequest. See Error Response for more details
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
