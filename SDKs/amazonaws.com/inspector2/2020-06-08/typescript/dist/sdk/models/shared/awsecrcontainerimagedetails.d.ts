import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The image details of the Amazon ECR container image.
 */
export declare class AwsEcrContainerImageDetails extends SpeakeasyBase {
    architecture?: string;
    author?: string;
    imageHash: string;
    imageTags?: string[];
    platform?: string;
    pushedAt?: Date;
    registry: string;
    repositoryName: string;
}
