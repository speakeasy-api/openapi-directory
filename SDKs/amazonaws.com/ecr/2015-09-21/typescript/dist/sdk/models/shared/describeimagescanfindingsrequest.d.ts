import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
export declare class DescribeImageScanFindingsRequest extends SpeakeasyBase {
    /**
     * An object with identifying information for an image in an Amazon ECR repository.
     */
    imageId: ImageIdentifier;
    maxResults?: number;
    nextToken?: string;
    registryId?: string;
    repositoryName: string;
}
