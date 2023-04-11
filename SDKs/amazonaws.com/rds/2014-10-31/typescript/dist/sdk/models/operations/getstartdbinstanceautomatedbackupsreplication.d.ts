import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETStartDBInstanceAutomatedBackupsReplicationActionEnum {
    StartDBInstanceAutomatedBackupsReplication = "StartDBInstanceAutomatedBackupsReplication"
}
export declare enum GETStartDBInstanceAutomatedBackupsReplicationVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETStartDBInstanceAutomatedBackupsReplicationRequest extends SpeakeasyBase {
    action: GETStartDBInstanceAutomatedBackupsReplicationActionEnum;
    /**
     * The retention period for the replicated automated backups.
     */
    backupRetentionPeriod?: number;
    /**
     * The Amazon Web Services KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination Amazon Web Services Region, for example, <code>arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE</code>.
     */
    kmsKeyId?: string;
    /**
     * <p>In an Amazon Web Services GovCloud (US) Region, an URL that contains a Signature Version 4 signed request for the <code>StartDBInstanceAutomatedBackupsReplication</code> operation to call in the Amazon Web Services Region of the source DB instance. The presigned URL must be a valid request for the <code>StartDBInstanceAutomatedBackupsReplication</code> API operation that can run in the Amazon Web Services Region that contains the source DB instance.</p> <p>This setting applies only to Amazon Web Services GovCloud (US) Regions. It's ignored in other Amazon Web Services Regions.</p> <p>To learn how to generate a Signature Version 4 signed request, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html"> Authenticating Requests: Using Query Parameters (Amazon Web Services Signature Version 4)</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html"> Signature Version 4 Signing Process</a>.</p> <note> <p>If you are using an Amazon Web Services SDK tool or the CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the CLI) instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a presigned URL that is a valid request for the operation that can run in the source Amazon Web Services Region.</p> </note>
     */
    preSignedUrl?: string;
    /**
     * The Amazon Resource Name (ARN) of the source DB instance for the replicated automated backups, for example, <code>arn:aws:rds:us-west-2:123456789012:db:mydatabase</code>.
     */
    sourceDBInstanceArn: string;
    version: GETStartDBInstanceAutomatedBackupsReplicationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETStartDBInstanceAutomatedBackupsReplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
