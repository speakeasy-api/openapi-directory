import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmStatusDetails } from "./algorithmstatusdetails";
import { AlgorithmStatusEnum } from "./algorithmstatusenum";
import { AlgorithmValidationSpecification } from "./algorithmvalidationspecification";
import { InferenceSpecification } from "./inferencespecification";
import { TrainingSpecification } from "./trainingspecification";
/**
 * Success
 */
export declare class DescribeAlgorithmOutput extends SpeakeasyBase {
    algorithmArn: string;
    algorithmDescription?: string;
    algorithmName: string;
    algorithmStatus: AlgorithmStatusEnum;
    algorithmStatusDetails: AlgorithmStatusDetails;
    certifyForMarketplace?: boolean;
    creationTime: Date;
    inferenceSpecification?: InferenceSpecification;
    productId?: string;
    trainingSpecification: TrainingSpecification;
    validationSpecification?: AlgorithmValidationSpecification;
}
