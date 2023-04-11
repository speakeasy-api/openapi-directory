import { SpeakeasyBase } from "../../../internal/utils";
import { DataCollectionTypeEnum } from "./datacollectiontypeenum";
import { Filter } from "./filter";
/**
 * Success
 */
export declare class GetRasterDataCollectionOutput extends SpeakeasyBase {
    arn: string;
    description: string;
    descriptionPageUrl: string;
    imageSourceBands: string[];
    name: string;
    supportedFilters: Filter[];
    tags?: Record<string, string>;
    type: DataCollectionTypeEnum;
}
