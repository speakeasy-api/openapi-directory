import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SubmitAttachmentStateChangesXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113SubmitAttachmentStateChanges = "AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges"
}
export declare class SubmitAttachmentStateChangesRequest extends SpeakeasyBase {
    submitAttachmentStateChangesRequest: shared.SubmitAttachmentStateChangesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SubmitAttachmentStateChangesXAmzTargetEnum;
}
export declare class SubmitAttachmentStateChangesResponse extends SpeakeasyBase {
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
    submitAttachmentStateChangesResponse?: shared.SubmitAttachmentStateChangesResponse;
}
