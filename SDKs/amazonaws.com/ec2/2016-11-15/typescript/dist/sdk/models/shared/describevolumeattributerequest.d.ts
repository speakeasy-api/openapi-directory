import { SpeakeasyBase } from "../../../internal/utils";
import { VolumeAttributeNameEnum } from "./volumeattributenameenum";
export declare class DescribeVolumeAttributeRequest extends SpeakeasyBase {
    attribute: VolumeAttributeNameEnum;
    dryRun?: boolean;
    volumeId: string;
}
