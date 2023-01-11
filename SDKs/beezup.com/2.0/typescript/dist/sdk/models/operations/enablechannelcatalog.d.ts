import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableChannelCatalogPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class EnableChannelCatalogRequest extends SpeakeasyBase {
    pathParams: EnableChannelCatalogPathParams;
}
export declare class EnableChannelCatalogResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    upgradeOfferRequired?: shared.UpgradeOfferRequired;
}
