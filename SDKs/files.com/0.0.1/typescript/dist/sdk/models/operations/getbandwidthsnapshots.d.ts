import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBandwidthSnapshotsQueryParams extends SpeakeasyBase {
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
export declare class GetBandwidthSnapshotsRequest extends SpeakeasyBase {
    queryParams: GetBandwidthSnapshotsQueryParams;
}
export declare class GetBandwidthSnapshotsResponse extends SpeakeasyBase {
    bandwidthSnapshotEntities?: shared.BandwidthSnapshotEntity[];
    contentType: string;
    statusCode: number;
}
