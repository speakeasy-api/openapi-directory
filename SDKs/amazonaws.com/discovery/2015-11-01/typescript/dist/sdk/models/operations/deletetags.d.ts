import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTagsXAmzTargetEnum {
    AWSPoseidonServiceV20151101DeleteTags = "AWSPoseidonService_V2015_11_01.DeleteTags"
}
export declare class DeleteTagsRequest extends SpeakeasyBase {
    deleteTagsRequest: shared.DeleteTagsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTagsXAmzTargetEnum;
}
export declare class DeleteTagsResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteTagsResponse?: Record<string, any>;
    /**
     * HomeRegionNotSetException
     */
    homeRegionNotSetException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
}
