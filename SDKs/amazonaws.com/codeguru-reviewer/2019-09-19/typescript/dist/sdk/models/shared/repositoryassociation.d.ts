import { SpeakeasyBase } from "../../../internal/utils";
import { KMSKeyDetails } from "./kmskeydetails";
import { ProviderTypeEnum } from "./providertypeenum";
import { RepositoryAssociationStateEnum } from "./repositoryassociationstateenum";
import { S3RepositoryDetails } from "./s3repositorydetails";
/**
 * Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html">DescribeRepositoryAssociation</a> operation returns a <code>RepositoryAssociation</code> object.
 */
export declare class RepositoryAssociation extends SpeakeasyBase {
    associationArn?: string;
    associationId?: string;
    connectionArn?: string;
    createdTimeStamp?: Date;
    kmsKeyDetails?: KMSKeyDetails;
    lastUpdatedTimeStamp?: Date;
    name?: string;
    owner?: string;
    providerType?: ProviderTypeEnum;
    /**
     * Specifies the name of an S3 bucket and a <code>CodeArtifacts</code> object that contains the S3 object keys for a source code .zip file and for a build artifacts .zip file that contains .jar or .class files.
     */
    s3RepositoryDetails?: S3RepositoryDetails;
    state?: RepositoryAssociationStateEnum;
    stateReason?: string;
}
