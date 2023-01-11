import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBundleRecipientsQueryParams extends SpeakeasyBase {
    bundleId: number;
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    perPage?: number;
    sortBy?: Record<string, any>;
    userId?: number;
}
export declare class GetBundleRecipientsRequest extends SpeakeasyBase {
    queryParams: GetBundleRecipientsQueryParams;
}
export declare class GetBundleRecipientsResponse extends SpeakeasyBase {
    bundleRecipientEntities?: shared.BundleRecipientEntity[];
    contentType: string;
    statusCode: number;
}
