import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
/**
 * Type that describes the face Amazon Rekognition chose to compare with the faces in the target. This contains a bounding box for the selected face and confidence level that the bounding box contains a face. Note that Amazon Rekognition selects the largest face in the source image for this comparison.
 */
export declare class ComparedSourceImageFace extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    confidence?: number;
}
