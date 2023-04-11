import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
import { ImageScanFindings } from "./imagescanfindings";
import { ImageScanStatus } from "./imagescanstatus";
/**
 * Success
 */
export declare class DescribeImageScanFindingsResponse extends SpeakeasyBase {
    /**
     * An object with identifying information for an image in an Amazon ECR repository.
     */
    imageId?: ImageIdentifier;
    imageScanFindings?: ImageScanFindings;
    imageScanStatus?: ImageScanStatus;
    nextToken?: string;
    registryId?: string;
    repositoryName?: string;
}
