import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLegacyTrackingChannelCatalogsRequest extends SpeakeasyBase {
    /**
     * The store identifier
     */
    storeId?: string;
}
export declare class GetLegacyTrackingChannelCatalogsResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    legacyTrackingChannelCatalogList?: shared.LegacyTrackingChannelCatalogList;
}
