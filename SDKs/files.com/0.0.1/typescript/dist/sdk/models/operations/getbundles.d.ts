import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBundlesQueryParams extends SpeakeasyBase {
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
export declare class GetBundlesRequest extends SpeakeasyBase {
    queryParams: GetBundlesQueryParams;
}
export declare class GetBundlesResponse extends SpeakeasyBase {
    bundleEntities?: shared.BundleEntity[];
    contentType: string;
    statusCode: number;
}
