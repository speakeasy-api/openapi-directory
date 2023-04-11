import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TimeSeriesReplacementsDataSource } from "./timeseriesreplacementsdatasource";
import { TimeSeriesTransformation } from "./timeseriestransformation";
export declare class CreateWhatIfForecastRequest extends SpeakeasyBase {
    tags?: Tag[];
    timeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource;
    timeSeriesTransformations?: TimeSeriesTransformation[];
    whatIfAnalysisArn: string;
    whatIfForecastName: string;
}
