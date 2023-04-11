import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSchedulingPolicyRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the scheduling policy to delete.
     */
    arn: string;
}
export declare class DeleteSchedulingPolicyRequest extends SpeakeasyBase {
    requestBody: DeleteSchedulingPolicyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSchedulingPolicyResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteSchedulingPolicyResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
}
