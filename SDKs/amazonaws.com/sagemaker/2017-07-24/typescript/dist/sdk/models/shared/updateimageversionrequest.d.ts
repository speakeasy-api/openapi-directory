import { SpeakeasyBase } from "../../../internal/utils";
import { JobTypeEnum } from "./jobtypeenum";
import { ProcessorEnum } from "./processorenum";
import { VendorGuidanceEnum } from "./vendorguidanceenum";
export declare class UpdateImageVersionRequest extends SpeakeasyBase {
    alias?: string;
    aliasesToAdd?: string[];
    aliasesToDelete?: string[];
    horovod?: boolean;
    imageName: string;
    jobType?: JobTypeEnum;
    mlFramework?: string;
    processor?: ProcessorEnum;
    programmingLang?: string;
    releaseNotes?: string;
    vendorGuidance?: VendorGuidanceEnum;
    version?: number;
}
