import { SpeakeasyBase } from "../../../internal/utils";
import { ImageVersionStatusEnum } from "./imageversionstatusenum";
import { JobTypeEnum } from "./jobtypeenum";
import { ProcessorEnum } from "./processorenum";
import { VendorGuidanceEnum } from "./vendorguidanceenum";
/**
 * Success
 */
export declare class DescribeImageVersionResponse extends SpeakeasyBase {
    baseImage?: string;
    containerImage?: string;
    creationTime?: Date;
    failureReason?: string;
    horovod?: boolean;
    imageArn?: string;
    imageVersionArn?: string;
    imageVersionStatus?: ImageVersionStatusEnum;
    jobType?: JobTypeEnum;
    lastModifiedTime?: Date;
    mlFramework?: string;
    processor?: ProcessorEnum;
    programmingLang?: string;
    releaseNotes?: string;
    vendorGuidance?: VendorGuidanceEnum;
    version?: number;
}
