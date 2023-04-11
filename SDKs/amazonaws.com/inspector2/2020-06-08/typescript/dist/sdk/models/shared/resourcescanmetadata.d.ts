import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2Metadata } from "./ec2metadata";
import { EcrContainerImageMetadata } from "./ecrcontainerimagemetadata";
import { EcrRepositoryMetadata } from "./ecrrepositorymetadata";
import { LambdaFunctionMetadata } from "./lambdafunctionmetadata";
/**
 * An object that contains details about the metadata for an Amazon ECR resource.
 */
export declare class ResourceScanMetadata extends SpeakeasyBase {
    ec2?: Ec2Metadata;
    ecrImage?: EcrContainerImageMetadata;
    ecrRepository?: EcrRepositoryMetadata;
    lambdaFunction?: LambdaFunctionMetadata;
}
