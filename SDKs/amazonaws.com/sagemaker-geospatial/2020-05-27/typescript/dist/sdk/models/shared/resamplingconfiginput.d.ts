import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmNameResamplingEnum } from "./algorithmnameresamplingenum";
import { OutputResolutionResamplingInput } from "./outputresolutionresamplinginput";
/**
 * <p/>
 */
export declare class ResamplingConfigInput extends SpeakeasyBase {
    algorithmName?: AlgorithmNameResamplingEnum;
    outputResolution: OutputResolutionResamplingInput;
    targetBands?: string[];
}
