import { SpeakeasyBase } from "../../../internal/utils";
import { EnhancedImageScanFinding } from "./enhancedimagescanfinding";
import { ImageScanFinding } from "./imagescanfinding";
/**
 * The details of an image scan.
 */
export declare class ImageScanFindings extends SpeakeasyBase {
    enhancedFindings?: EnhancedImageScanFinding[];
    findingSeverityCounts?: Record<string, number>;
    findings?: ImageScanFinding[];
    imageScanCompletedAt?: Date;
    vulnerabilitySourceUpdatedAt?: Date;
}
