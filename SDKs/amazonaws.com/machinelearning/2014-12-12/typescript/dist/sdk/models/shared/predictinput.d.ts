import { SpeakeasyBase } from "../../../internal/utils";
export declare class PredictInput extends SpeakeasyBase {
    mlModelId: string;
    predictEndpoint: string;
    record: Record<string, string>;
}
