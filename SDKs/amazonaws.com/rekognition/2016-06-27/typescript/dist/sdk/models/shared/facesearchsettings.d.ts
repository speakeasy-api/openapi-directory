import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input face recognition parameters for an Amazon Rekognition stream processor. Includes the collection to use for face recognition and the face attributes to detect. Defining the settings is required in the request parameter for <a>CreateStreamProcessor</a>.
 */
export declare class FaceSearchSettings extends SpeakeasyBase {
    collectionId?: string;
    faceMatchThreshold?: number;
}
