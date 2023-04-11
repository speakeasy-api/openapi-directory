import { SpeakeasyBase } from "../../../internal/utils";
import { NotScaledReason } from "./notscaledreason";
import { ScalableDimensionEnum } from "./scalabledimensionenum";
import { ScalingActivityStatusCodeEnum } from "./scalingactivitystatuscodeenum";
import { ServiceNamespaceEnum } from "./servicenamespaceenum";
/**
 * Represents a scaling activity.
 */
export declare class ScalingActivity extends SpeakeasyBase {
    activityId: string;
    cause: string;
    description: string;
    details?: string;
    endTime?: Date;
    notScaledReasons?: NotScaledReason[];
    resourceId: string;
    scalableDimension: ScalableDimensionEnum;
    serviceNamespace: ServiceNamespaceEnum;
    startTime: Date;
    statusCode: ScalingActivityStatusCodeEnum;
    statusMessage?: string;
}
