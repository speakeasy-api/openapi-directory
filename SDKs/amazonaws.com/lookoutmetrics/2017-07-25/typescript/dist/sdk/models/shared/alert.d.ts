import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { AlertFilters } from "./alertfilters";
import { AlertStatusEnum } from "./alertstatusenum";
import { AlertTypeEnum } from "./alerttypeenum";
/**
 * A configuration for Amazon SNS-integrated notifications.
 */
export declare class Alert extends SpeakeasyBase {
    action?: Action;
    alertArn?: string;
    alertDescription?: string;
    alertFilters?: AlertFilters;
    alertName?: string;
    alertSensitivityThreshold?: number;
    alertStatus?: AlertStatusEnum;
    alertType?: AlertTypeEnum;
    anomalyDetectorArn?: string;
    creationTime?: Date;
    lastModificationTime?: Date;
}
