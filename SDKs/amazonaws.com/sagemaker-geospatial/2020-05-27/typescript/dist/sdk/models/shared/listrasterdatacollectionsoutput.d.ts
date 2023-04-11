import { SpeakeasyBase } from "../../../internal/utils";
import { RasterDataCollectionMetadata } from "./rasterdatacollectionmetadata";
/**
 * Success
 */
export declare class ListRasterDataCollectionsOutput extends SpeakeasyBase {
    nextToken?: string;
    rasterDataCollectionSummaries: RasterDataCollectionMetadata[];
}
