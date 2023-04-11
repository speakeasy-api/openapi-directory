import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
import { LambdaVpcConfig } from "./lambdavpcconfig";
import { PackageTypeEnum } from "./packagetypeenum";
import { RuntimeEnum } from "./runtimeenum";
/**
 *  A summary of information about the AWS Lambda function.
 */
export declare class AwsLambdaFunctionDetails extends SpeakeasyBase {
    architectures?: ArchitectureEnum[];
    codeSha256: string;
    executionRoleArn: string;
    functionName: string;
    lastModifiedAt?: Date;
    layers?: string[];
    packageType?: PackageTypeEnum;
    runtime: RuntimeEnum;
    version: string;
    vpcConfig?: LambdaVpcConfig;
}
