import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddChannelCatalogResponse extends SpeakeasyBase {
    /**
     * StoreId not found or not authorized
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * When the channel has been successfully added for this store
     */
    linksGetChannelCatalogLink?: shared.LinksGetChannelCatalogLink;
}
