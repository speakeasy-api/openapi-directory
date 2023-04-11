import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { QualityFilterEnum } from "./qualityfilterenum";
export declare class CompareFacesRequest extends SpeakeasyBase {
    qualityFilter?: QualityFilterEnum;
    similarityThreshold?: number;
    sourceImage: Image;
    targetImage: Image;
}
