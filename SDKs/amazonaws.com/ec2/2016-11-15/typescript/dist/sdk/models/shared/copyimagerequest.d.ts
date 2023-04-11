import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the parameters for CopyImage.
 */
export declare class CopyImageRequest extends SpeakeasyBase {
    clientToken?: string;
    copyImageTags?: boolean;
    description?: string;
    destinationOutpostArn?: string;
    dryRun?: boolean;
    encrypted?: boolean;
    kmsKeyId?: string;
    name: string;
    sourceImageId: string;
    sourceRegion: string;
}
