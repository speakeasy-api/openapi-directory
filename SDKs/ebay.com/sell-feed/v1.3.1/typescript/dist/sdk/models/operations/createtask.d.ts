import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTaskSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateTaskRequest extends SpeakeasyBase {
    /**
     * description not needed
     */
    createTaskRequest: shared.CreateTaskRequest;
    /**
     * The ID of the eBay marketplace where the item is hosted. <p> <span class="tablenote"><strong>Note:</strong> This value is case sensitive.</span></p><p>For example:</p><p><code>X-EBAY-C-MARKETPLACE-ID:EBAY_US</code></p><p>This identifies the eBay marketplace that applies to this task. See <a href="/api-docs/sell/feed/types/bas:MarketplaceIdEnum">MarketplaceIdEnum</a>.</p>
     */
    xEbayCMarketplaceId?: string;
}
export declare class CreateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
