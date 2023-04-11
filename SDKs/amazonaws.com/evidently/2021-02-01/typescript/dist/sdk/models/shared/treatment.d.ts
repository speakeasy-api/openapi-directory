import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure that defines one treatment in an experiment. A treatment is a variation of the feature that you are including in the experiment.
 */
export declare class Treatment extends SpeakeasyBase {
    description?: string;
    featureVariations?: Record<string, string>;
    name: string;
}
