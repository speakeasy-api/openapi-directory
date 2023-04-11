import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServerNeighborsXAmzTargetEnum {
    AWSPoseidonServiceV20151101ListServerNeighbors = "AWSPoseidonService_V2015_11_01.ListServerNeighbors"
}
export declare class ListServerNeighborsRequest extends SpeakeasyBase {
    listServerNeighborsRequest: shared.ListServerNeighborsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServerNeighborsXAmzTargetEnum;
}
export declare class ListServerNeighborsResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    contentType: string;
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
    /**
     * Success
     */
    listServerNeighborsResponse?: shared.ListServerNeighborsResponse;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
