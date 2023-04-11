import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SubmitContainerStateChangeXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113SubmitContainerStateChange = "AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange"
}
export declare class SubmitContainerStateChangeRequest extends SpeakeasyBase {
    submitContainerStateChangeRequest: shared.SubmitContainerStateChangeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SubmitContainerStateChangeXAmzTargetEnum;
}
export declare class SubmitContainerStateChangeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * Success
     */
    submitContainerStateChangeResponse?: shared.SubmitContainerStateChangeResponse;
}
