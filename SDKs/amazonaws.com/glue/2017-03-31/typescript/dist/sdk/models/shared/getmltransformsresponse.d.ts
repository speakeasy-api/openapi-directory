import { SpeakeasyBase } from "../../../internal/utils";
import { MLTransform } from "./mltransform";
/**
 * Success
 */
export declare class GetMLTransformsResponse extends SpeakeasyBase {
    nextToken?: string;
    transforms: MLTransform[];
}
