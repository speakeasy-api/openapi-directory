import { SpeakeasyBase } from "../../../internal/utils";
import { ProductionVariantAcceleratorTypeEnum } from "./productionvariantacceleratortypeenum";
import { ProductionVariantCoreDumpConfig } from "./productionvariantcoredumpconfig";
import { ProductionVariantInstanceTypeEnum } from "./productionvariantinstancetypeenum";
import { ProductionVariantServerlessConfig } from "./productionvariantserverlessconfig";
/**
 *  Identifies a model that you want to host and the resources chosen to deploy for hosting it. If you are deploying multiple models, tell SageMaker how to distribute traffic among the models by specifying variant weights. For more information on production variants, check <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-ab-testing.html"> Production variants</a>.
 */
export declare class ProductionVariant extends SpeakeasyBase {
    acceleratorType?: ProductionVariantAcceleratorTypeEnum;
    containerStartupHealthCheckTimeoutInSeconds?: number;
    coreDumpConfig?: ProductionVariantCoreDumpConfig;
    enableSSMAccess?: boolean;
    initialInstanceCount?: number;
    initialVariantWeight?: number;
    instanceType?: ProductionVariantInstanceTypeEnum;
    modelDataDownloadTimeoutInSeconds?: number;
    modelName: string;
    serverlessConfig?: ProductionVariantServerlessConfig;
    variantName: string;
    volumeSizeInGB?: number;
}
