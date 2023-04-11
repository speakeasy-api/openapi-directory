import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETStartActivityStreamActionEnum {
    StartActivityStream = "StartActivityStream"
}
/**
 * Specifies the mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously.
 */
export declare enum GETStartActivityStreamModeEnum {
    Sync = "sync",
    Async = "async"
}
export declare enum GETStartActivityStreamVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETStartActivityStreamRequest extends SpeakeasyBase {
    action: GETStartActivityStreamActionEnum;
    /**
     * Specifies whether or not the database activity stream is to start as soon as possible, regardless of the maintenance window for the database.
     */
    applyImmediately?: boolean;
    /**
     * Specifies whether the database activity stream includes engine-native audit fields. This option applies to an Oracle or Microsoft SQL Server DB instance. By default, no engine-native audit fields are included.
     */
    engineNativeAuditFieldsIncluded?: boolean;
    /**
     * The Amazon Web Services KMS key identifier for encrypting messages in the database activity stream. The Amazon Web Services KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
     */
    kmsKeyId: string;
    /**
     * Specifies the mode of the database activity stream. Database events such as a change or access generate an activity stream event. The database session can handle these events either synchronously or asynchronously.
     */
    mode: GETStartActivityStreamModeEnum;
    /**
     * The Amazon Resource Name (ARN) of the DB cluster, for example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.
     */
    resourceArn: string;
    version: GETStartActivityStreamVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETStartActivityStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
