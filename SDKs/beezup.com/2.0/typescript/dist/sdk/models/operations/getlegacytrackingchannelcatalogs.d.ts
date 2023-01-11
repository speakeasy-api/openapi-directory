import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLegacyTrackingChannelCatalogsQueryParams extends SpeakeasyBase {
    storeId?: string;
}
export declare class GetLegacyTrackingChannelCatalogsRequest extends SpeakeasyBase {
    queryParams: GetLegacyTrackingChannelCatalogsQueryParams;
}
export declare class GetLegacyTrackingChannelCatalogsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    legacyTrackingChannelCatalogList?: shared.LegacyTrackingChannelCatalogList;
}
