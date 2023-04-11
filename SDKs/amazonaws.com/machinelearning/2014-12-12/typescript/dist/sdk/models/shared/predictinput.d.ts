import { SpeakeasyBase } from "../../../internal/utils";
export declare class PredictInput extends SpeakeasyBase {
    mlModelId: string;
    predictEndpoint: string;
    /**
     * A map of variable name-value pairs that represent an observation.
     */
    record: Record<string, string>;
}
