import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateItemDraftSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateItemDraftRequest extends SpeakeasyBase {
    /**
     * Use this header to specify the natural language of the seller. For details, see Content-Language in HTTP request headers. Required: For EBAY_CA in French. (Content-Language = fr-CA)
     */
    contentLanguage?: string;
    itemDraft?: shared.ItemDraft;
    /**
     * Use this header to specify an eBay marketplace ID. For a list of supported sites, see API Restrictions in the Listing API overview.
     */
    xEbayCMarketplaceId: string;
}
export declare class CreateItemDraftResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    itemDraftResponse?: shared.ItemDraftResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
