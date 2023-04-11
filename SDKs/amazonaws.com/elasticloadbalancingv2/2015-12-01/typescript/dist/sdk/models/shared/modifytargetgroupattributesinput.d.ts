import { SpeakeasyBase } from "../../../internal/utils";
import { TargetGroupAttribute } from "./targetgroupattribute";
export declare class ModifyTargetGroupAttributesInput extends SpeakeasyBase {
    attributes: TargetGroupAttribute[];
    targetGroupArn: string;
}
