import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
/**
 * Contains a summary of a time series (data stream).
 */
export declare class TimeSeriesSummary extends SpeakeasyBase {
    alias?: string;
    assetId?: string;
    dataType: PropertyDataTypeEnum;
    dataTypeSpec?: string;
    propertyId?: string;
    timeSeriesArn: string;
    timeSeriesCreationDate: Date;
    timeSeriesId: string;
    timeSeriesLastUpdateDate: Date;
}
