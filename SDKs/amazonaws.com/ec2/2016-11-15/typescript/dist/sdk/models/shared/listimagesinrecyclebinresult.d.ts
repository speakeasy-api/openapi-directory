import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an AMI that is currently in the Recycle Bin.
 */
export declare class ListImagesInRecycleBinResultImages extends SpeakeasyBase {
    description?: string;
    imageId?: string;
    name?: string;
    recycleBinEnterTime?: Date;
    recycleBinExitTime?: Date;
}
/**
 * Success
 */
export declare class ListImagesInRecycleBinResult extends SpeakeasyBase {
    images?: ListImagesInRecycleBinResultImages[];
    nextToken?: string;
}
