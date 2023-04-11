import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureStatusEnum } from "./featurestatusenum";
/**
 * Time series forecast settings for the SageMaker Canvas app.
 */
export declare class TimeSeriesForecastingSettings extends SpeakeasyBase {
    amazonForecastRoleArn?: string;
    status?: FeatureStatusEnum;
}
