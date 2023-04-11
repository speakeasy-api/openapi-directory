import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateUpdatedImageRequest extends SpeakeasyBase {
    dryRun?: boolean;
    existingImageName: string;
    newImageDescription?: string;
    newImageDisplayName?: string;
    newImageName: string;
    newImageTags?: Record<string, string>;
}
