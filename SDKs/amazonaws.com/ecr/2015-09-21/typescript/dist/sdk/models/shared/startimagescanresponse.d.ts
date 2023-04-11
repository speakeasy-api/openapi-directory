import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
import { ImageScanStatus } from "./imagescanstatus";
/**
 * Success
 */
export declare class StartImageScanResponse extends SpeakeasyBase {
    /**
     * An object with identifying information for an image in an Amazon ECR repository.
     */
    imageId?: ImageIdentifier;
    imageScanStatus?: ImageScanStatus;
    registryId?: string;
    repositoryName?: string;
}
