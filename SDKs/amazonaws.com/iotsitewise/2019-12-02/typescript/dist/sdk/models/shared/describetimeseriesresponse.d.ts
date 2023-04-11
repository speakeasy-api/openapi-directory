import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyDataTypeEnum } from "./propertydatatypeenum";
/**
 * Success
 */
export declare class DescribeTimeSeriesResponse extends SpeakeasyBase {
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
