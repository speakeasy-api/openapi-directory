import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRecordHandlerProgressActionEnum {
    RecordHandlerProgress = "RecordHandlerProgress"
}
/**
 * Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
 */
export declare enum GETRecordHandlerProgressCurrentOperationStatusEnum {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Success = "SUCCESS",
    Failed = "FAILED"
}
/**
 * Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
 */
export declare enum GETRecordHandlerProgressErrorCodeEnum {
    NotUpdatable = "NotUpdatable",
    InvalidRequest = "InvalidRequest",
    AccessDenied = "AccessDenied",
    InvalidCredentials = "InvalidCredentials",
    AlreadyExists = "AlreadyExists",
    NotFound = "NotFound",
    ResourceConflict = "ResourceConflict",
    Throttling = "Throttling",
    ServiceLimitExceeded = "ServiceLimitExceeded",
    NotStabilized = "NotStabilized",
    GeneralServiceException = "GeneralServiceException",
    ServiceInternalError = "ServiceInternalError",
    NetworkFailure = "NetworkFailure",
    InternalFailure = "InternalFailure",
    InvalidTypeConfiguration = "InvalidTypeConfiguration",
    HandlerInternalFailure = "HandlerInternalFailure",
    NonCompliant = "NonCompliant",
    Unknown = "Unknown",
    UnsupportedTarget = "UnsupportedTarget"
}
/**
 * Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
 */
export declare enum GETRecordHandlerProgressOperationStatusEnum {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Success = "SUCCESS",
    Failed = "FAILED"
}
export declare enum GETRecordHandlerProgressVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETRecordHandlerProgressRequest extends SpeakeasyBase {
    action: GETRecordHandlerProgressActionEnum;
    /**
     * Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
     */
    bearerToken: string;
    /**
     * Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
     */
    clientRequestToken?: string;
    /**
     * Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
     */
    currentOperationStatus?: GETRecordHandlerProgressCurrentOperationStatusEnum;
    /**
     * Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
     */
    errorCode?: GETRecordHandlerProgressErrorCodeEnum;
    /**
     * Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
     */
    operationStatus: GETRecordHandlerProgressOperationStatusEnum;
    /**
     * Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
     */
    resourceModel?: string;
    /**
     * Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>.
     */
    statusMessage?: string;
    version: GETRecordHandlerProgressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRecordHandlerProgressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
