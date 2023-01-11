import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSourceServerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSourceServerRequestBody extends SpeakeasyBase {
    sourceServerID: string;
}
export declare class DeleteSourceServerRequest extends SpeakeasyBase {
    headers: DeleteSourceServerHeaders;
    request: DeleteSourceServerRequestBody;
}
export declare class DeleteSourceServerResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteSourceServerResponse?: Record<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
    uninitializedAccountException?: any;
}
