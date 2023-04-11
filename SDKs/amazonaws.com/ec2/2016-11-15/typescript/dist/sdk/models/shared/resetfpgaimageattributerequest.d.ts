import { SpeakeasyBase } from "../../../internal/utils";
import { ResetFpgaImageAttributeNameEnum } from "./resetfpgaimageattributenameenum";
export declare class ResetFpgaImageAttributeRequest extends SpeakeasyBase {
    attribute?: ResetFpgaImageAttributeNameEnum;
    dryRun?: boolean;
    fpgaImageId: string;
}
