import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SubmitTaskStateChangeXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113SubmitTaskStateChange = "AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange"
}
export declare class SubmitTaskStateChangeRequest extends SpeakeasyBase {
    submitTaskStateChangeRequest: shared.SubmitTaskStateChangeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SubmitTaskStateChangeXAmzTargetEnum;
}
export declare class SubmitTaskStateChangeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * Success
     */
    submitTaskStateChangeResponse?: shared.SubmitTaskStateChangeResponse;
}
