import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPoolOriginationIdentitiesXAmzTargetEnum {
    PinpointSMSVoiceV2ListPoolOriginationIdentities = "PinpointSMSVoiceV2.ListPoolOriginationIdentities"
}
export declare class ListPoolOriginationIdentitiesRequest extends SpeakeasyBase {
    listPoolOriginationIdentitiesRequest: shared.ListPoolOriginationIdentitiesRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPoolOriginationIdentitiesXAmzTargetEnum;
}
export declare class ListPoolOriginationIdentitiesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listPoolOriginationIdentitiesResult?: shared.ListPoolOriginationIdentitiesResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
