import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmImage } from "./algorithmimage";
import { DefaultHyperParameterRanges } from "./defaulthyperparameterranges";
/**
 * Describes a custom algorithm.
**/
export declare class Algorithm extends SpeakeasyBase {
    algorithmArn?: string;
    algorithmImage?: AlgorithmImage;
    creationDateTime?: Date;
    defaultHyperParameterRanges?: DefaultHyperParameterRanges;
    defaultHyperParameters?: Record<string, string>;
    defaultResourceConfig?: Record<string, string>;
    lastUpdatedDateTime?: Date;
    name?: string;
    roleArn?: string;
    trainingInputMode?: string;
}
