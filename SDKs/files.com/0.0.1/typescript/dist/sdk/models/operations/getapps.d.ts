import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAppsQueryParams extends SpeakeasyBase {
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
export declare class GetAppsRequest extends SpeakeasyBase {
    queryParams: GetAppsQueryParams;
}
export declare class GetAppsResponse extends SpeakeasyBase {
    appEntities?: shared.AppEntity[];
    contentType: string;
    statusCode: number;
}
