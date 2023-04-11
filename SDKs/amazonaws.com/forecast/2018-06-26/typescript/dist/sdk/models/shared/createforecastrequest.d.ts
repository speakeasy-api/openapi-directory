import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TimeSeriesSelector } from "./timeseriesselector";
export declare class CreateForecastRequest extends SpeakeasyBase {
    forecastName: string;
    forecastTypes?: string[];
    predictorArn: string;
    tags?: Tag[];
    timeSeriesSelector?: TimeSeriesSelector;
}
