import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETStartExportTaskActionEnum {
    StartExportTask = "StartExportTask"
}
export declare enum GETStartExportTaskVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETStartExportTaskRequest extends SpeakeasyBase {
    action: GETStartExportTaskActionEnum;
    /**
     * <p>The data to be exported from the snapshot or cluster. If this parameter is not provided, all of the data is exported. Valid values are the following:</p> <ul> <li> <p> <code>database</code> - Export all the data from a specified database.</p> </li> <li> <p> <code>database.table</code> <i>table-name</i> - Export a table of the snapshot or cluster. This format is valid only for RDS for MySQL, RDS for MariaDB, and Aurora MySQL.</p> </li> <li> <p> <code>database.schema</code> <i>schema-name</i> - Export a database schema of the snapshot or cluster. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p> </li> <li> <p> <code>database.schema.table</code> <i>table-name</i> - Export a table of the database schema. This format is valid only for RDS for PostgreSQL and Aurora PostgreSQL.</p> </li> </ul>
     */
    exportOnly?: string[];
    /**
     * A unique identifier for the export task. This ID isn't an identifier for the Amazon S3 bucket where the data is to be exported.
     */
    exportTaskIdentifier: string;
    /**
     * <p>The name of the IAM role to use for writing to the Amazon S3 bucket when exporting a snapshot or cluster.</p> <p>In the IAM policy attached to your IAM role, include the following required actions to allow the transfer of files from Amazon RDS or Amazon Aurora to an S3 bucket:</p> <ul> <li> <p>s3:PutObject*</p> </li> <li> <p>s3:GetObject*</p> </li> <li> <p>s3:ListBucket</p> </li> <li> <p>s3:DeleteObject*</p> </li> <li> <p>s3:GetBucketLocation </p> </li> </ul> <p>In the policy, include the resources to identify the S3 bucket and objects in the bucket. The following list of resources shows the Amazon Resource Name (ARN) format for accessing S3:</p> <ul> <li> <p> <code>arn:aws:s3:::<i>your-s3-bucket</i> </code> </p> </li> <li> <p> <code>arn:aws:s3:::<i>your-s3-bucket</i>/*</code> </p> </li> </ul>
     */
    iamRoleArn: string;
    /**
     * <p>The ID of the Amazon Web Services KMS key to use to encrypt the data exported to Amazon S3. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key. The caller of this operation must be authorized to run the following operations. These can be set in the Amazon Web Services KMS key policy:</p> <ul> <li> <p>kms:Encrypt</p> </li> <li> <p>kms:Decrypt</p> </li> <li> <p>kms:GenerateDataKey</p> </li> <li> <p>kms:GenerateDataKeyWithoutPlaintext</p> </li> <li> <p>kms:ReEncryptFrom</p> </li> <li> <p>kms:ReEncryptTo</p> </li> <li> <p>kms:CreateGrant</p> </li> <li> <p>kms:DescribeKey</p> </li> <li> <p>kms:RetireGrant</p> </li> </ul>
     */
    kmsKeyId: string;
    /**
     * The name of the Amazon S3 bucket to export the snapshot or cluster data to.
     */
    s3BucketName: string;
    /**
     * The Amazon S3 bucket prefix to use as the file name and path of the exported data.
     */
    s3Prefix?: string;
    /**
     * The Amazon Resource Name (ARN) of the snapshot or cluster to export to Amazon S3.
     */
    sourceArn: string;
    version: GETStartExportTaskVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETStartExportTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
