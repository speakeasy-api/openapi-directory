import { SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
import { Tag } from "./tag";
export declare class CreateWhatIfForecastExportRequest extends SpeakeasyBase {
    destination: DataDestination;
    format?: string;
    tags?: Tag[];
    whatIfForecastArns: string[];
    whatIfForecastExportName: string;
}
