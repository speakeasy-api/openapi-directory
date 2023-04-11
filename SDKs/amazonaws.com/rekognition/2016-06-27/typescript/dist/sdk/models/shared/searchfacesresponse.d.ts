import { SpeakeasyBase } from "../../../internal/utils";
import { FaceMatch } from "./facematch";
/**
 * Success
 */
export declare class SearchFacesResponse extends SpeakeasyBase {
    faceMatches?: FaceMatch[];
    faceModelVersion?: string;
    searchedFaceId?: string;
}
