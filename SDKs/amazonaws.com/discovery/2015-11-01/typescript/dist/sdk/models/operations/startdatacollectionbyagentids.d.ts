import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartDataCollectionByAgentIdsXAmzTargetEnum {
    AWSPoseidonServiceV20151101StartDataCollectionByAgentIds = "AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds"
}
export declare class StartDataCollectionByAgentIdsRequest extends SpeakeasyBase {
    startDataCollectionByAgentIdsRequest: shared.StartDataCollectionByAgentIdsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDataCollectionByAgentIdsXAmzTargetEnum;
}
export declare class StartDataCollectionByAgentIdsResponse extends SpeakeasyBase {
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
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
    /**
     * Success
     */
    startDataCollectionByAgentIdsResponse?: shared.StartDataCollectionByAgentIdsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
