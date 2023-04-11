import { SpeakeasyBase } from "../../../internal/utils";
import { DataCollectionTypeEnum } from "./datacollectiontypeenum";
import { Filter } from "./filter";
/**
 * Response object containing details for a specific RasterDataCollection.
 */
export declare class RasterDataCollectionMetadata extends SpeakeasyBase {
    arn: string;
    description: string;
    descriptionPageUrl?: string;
    name: string;
    supportedFilters: Filter[];
    tags?: Record<string, string>;
    type: DataCollectionTypeEnum;
}
