import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PublishCatalogToMarketplaceRequest extends SpeakeasyBase {
    /**
     * Account Id to query (required)
     */
    accountId: number;
    /**
     * Marketplace Technical Code to query (required)
     */
    marketplaceTechnicalCode: string;
    publishCatalogToMarketplaceRequest: shared.PublishCatalogToMarketplaceRequest;
}
export declare class PublishCatalogToMarketplaceResponse extends SpeakeasyBase {
    /**
     * One or more channel catalog marketplace property keys or values are invalid for requested marketplace channel catalog. See response for details.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
