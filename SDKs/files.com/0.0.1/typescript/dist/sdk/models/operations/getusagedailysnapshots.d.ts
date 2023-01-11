import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsageDailySnapshotsQueryParams extends SpeakeasyBase {
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
export declare class GetUsageDailySnapshotsRequest extends SpeakeasyBase {
    queryParams: GetUsageDailySnapshotsQueryParams;
}
export declare class GetUsageDailySnapshotsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    usageDailySnapshotEntities?: shared.UsageDailySnapshotEntity[];
}
