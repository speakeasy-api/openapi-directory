import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
import { FaceMatch } from "./facematch";
/**
 * Success
 */
export declare class SearchFacesByImageResponse extends SpeakeasyBase {
    faceMatches?: FaceMatch[];
    faceModelVersion?: string;
    searchedFaceBoundingBox?: BoundingBox;
    searchedFaceConfidence?: number;
}
