import { SpeakeasyBase } from "../../../internal/utils";
import { JobTypeEnum } from "./jobtypeenum";
import { ProcessorEnum } from "./processorenum";
import { VendorGuidanceEnum } from "./vendorguidanceenum";
export declare class CreateImageVersionRequest extends SpeakeasyBase {
    aliases?: string[];
    baseImage: string;
    clientToken: string;
    horovod?: boolean;
    imageName: string;
    jobType?: JobTypeEnum;
    mlFramework?: string;
    processor?: ProcessorEnum;
    programmingLang?: string;
    releaseNotes?: string;
    vendorGuidance?: VendorGuidanceEnum;
}
