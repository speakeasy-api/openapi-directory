import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingTypeEnum } from "./scalingtypeenum";
export declare class UpdateShardCountInput extends SpeakeasyBase {
    scalingType: ScalingTypeEnum;
    streamARN?: string;
    streamName?: string;
    targetShardCount: number;
}
