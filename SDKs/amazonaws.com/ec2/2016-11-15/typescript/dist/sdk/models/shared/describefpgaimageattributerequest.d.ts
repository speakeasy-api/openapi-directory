import { SpeakeasyBase } from "../../../internal/utils";
import { FpgaImageAttributeNameEnum } from "./fpgaimageattributenameenum";
export declare class DescribeFpgaImageAttributeRequest extends SpeakeasyBase {
    attribute: FpgaImageAttributeNameEnum;
    dryRun?: boolean;
    fpgaImageId: string;
}
