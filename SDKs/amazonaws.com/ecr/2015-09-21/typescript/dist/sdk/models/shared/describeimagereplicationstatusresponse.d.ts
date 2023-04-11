import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
import { ImageReplicationStatus } from "./imagereplicationstatus";
/**
 * Success
 */
export declare class DescribeImageReplicationStatusResponse extends SpeakeasyBase {
    /**
     * An object with identifying information for an image in an Amazon ECR repository.
     */
    imageId?: ImageIdentifier;
    replicationStatuses?: ImageReplicationStatus[];
    repositoryName?: string;
}
