import { SpeakeasyBase } from "../../../internal/utils";
import { SnapStartApplyOnEnum } from "./snapstartapplyonenum";
import { SnapStartOptimizationStatusEnum } from "./snapstartoptimizationstatusenum";
/**
 * The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html">SnapStart</a> setting.
 */
export declare class SnapStartResponse extends SpeakeasyBase {
    applyOn?: SnapStartApplyOnEnum;
    optimizationStatus?: SnapStartOptimizationStatusEnum;
}
