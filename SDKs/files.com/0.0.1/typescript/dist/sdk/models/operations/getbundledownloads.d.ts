import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBundleDownloadsQueryParams extends SpeakeasyBase {
    bundleId?: number;
    bundleRegistrationId?: number;
    cursor?: string;
    filter?: Record<string, any>;
    filterGt?: Record<string, any>;
    filterGteq?: Record<string, any>;
    filterLike?: Record<string, any>;
    filterLt?: Record<string, any>;
    filterLteq?: Record<string, any>;
    perPage?: number;
    sortBy?: Record<string, any>;
}
export declare class GetBundleDownloadsRequest extends SpeakeasyBase {
    queryParams: GetBundleDownloadsQueryParams;
}
export declare class GetBundleDownloadsResponse extends SpeakeasyBase {
    bundleDownloadEntities?: shared.BundleDownloadEntity[];
    contentType: string;
    statusCode: number;
}
