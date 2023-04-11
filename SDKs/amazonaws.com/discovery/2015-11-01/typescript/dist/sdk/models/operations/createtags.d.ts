import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTagsXAmzTargetEnum {
    AWSPoseidonServiceV20151101CreateTags = "AWSPoseidonService_V2015_11_01.CreateTags"
}
export declare class CreateTagsRequest extends SpeakeasyBase {
    createTagsRequest: shared.CreateTagsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTagsXAmzTargetEnum;
}
export declare class CreateTagsResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    contentType: string;
    /**
     * Success
     */
    createTagsResponse?: Record<string, any>;
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
