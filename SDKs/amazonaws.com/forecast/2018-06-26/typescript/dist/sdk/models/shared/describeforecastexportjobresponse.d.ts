import { SpeakeasyBase } from "../../../internal/utils";
import { DataDestination } from "./datadestination";
/**
 * Success
 */
export declare class DescribeForecastExportJobResponse extends SpeakeasyBase {
    creationTime?: Date;
    destination?: DataDestination;
    forecastArn?: string;
    forecastExportJobArn?: string;
    forecastExportJobName?: string;
    format?: string;
    lastModificationTime?: Date;
    message?: string;
    status?: string;
}
