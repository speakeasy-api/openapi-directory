import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TimeSeriesSelector } from "./timeseriesselector";
export declare class CreateWhatIfAnalysisRequest extends SpeakeasyBase {
    forecastArn: string;
    tags?: Tag[];
    timeSeriesSelector?: TimeSeriesSelector;
    whatIfAnalysisName: string;
}
