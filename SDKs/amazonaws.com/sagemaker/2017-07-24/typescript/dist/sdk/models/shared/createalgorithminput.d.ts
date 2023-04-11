import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmValidationSpecification } from "./algorithmvalidationspecification";
import { InferenceSpecification } from "./inferencespecification";
import { Tag } from "./tag";
import { TrainingSpecification } from "./trainingspecification";
export declare class CreateAlgorithmInput extends SpeakeasyBase {
    algorithmDescription?: string;
    algorithmName: string;
    certifyForMarketplace?: boolean;
    inferenceSpecification?: InferenceSpecification;
    tags?: Tag[];
    trainingSpecification: TrainingSpecification;
    validationSpecification?: AlgorithmValidationSpecification;
}
