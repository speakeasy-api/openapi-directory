import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnableChannelCatalogRequest extends SpeakeasyBase {
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
}
export declare class EnableChannelCatalogResponse extends SpeakeasyBase {
    /**
     * Occurs when a user tries to work on the wrong ChanelCatalogId.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * You have to upgrade your offer to activate this channel catalog
     */
    upgradeOfferRequired?: shared.UpgradeOfferRequired;
}
