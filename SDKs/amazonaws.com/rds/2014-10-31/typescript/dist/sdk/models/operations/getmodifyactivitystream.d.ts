import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyActivityStreamActionEnum {
    ModifyActivityStream = "ModifyActivityStream"
}
/**
 * The audit policy state. When a policy is unlocked, it is read/write. When it is locked, it is read-only. You can edit your audit policy only when the activity stream is unlocked or stopped.
 */
export declare enum GETModifyActivityStreamAuditPolicyStateEnum {
    Locked = "locked",
    Unlocked = "unlocked"
}
export declare enum GETModifyActivityStreamVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETModifyActivityStreamRequest extends SpeakeasyBase {
    action: GETModifyActivityStreamActionEnum;
    /**
     * The audit policy state. When a policy is unlocked, it is read/write. When it is locked, it is read-only. You can edit your audit policy only when the activity stream is unlocked or stopped.
     */
    auditPolicyState?: GETModifyActivityStreamAuditPolicyStateEnum;
    /**
     * The Amazon Resource Name (ARN) of the RDS for Oracle or Microsoft SQL Server DB instance. For example, <code>arn:aws:rds:us-east-1:12345667890:instance:my-orcl-db</code>.
     */
    resourceArn?: string;
    version: GETModifyActivityStreamVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyActivityStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
