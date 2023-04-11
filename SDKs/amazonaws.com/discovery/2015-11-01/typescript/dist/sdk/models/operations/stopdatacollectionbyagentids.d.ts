import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopDataCollectionByAgentIdsXAmzTargetEnum {
    AWSPoseidonServiceV20151101StopDataCollectionByAgentIds = "AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds"
}
export declare class StopDataCollectionByAgentIdsRequest extends SpeakeasyBase {
    stopDataCollectionByAgentIdsRequest: shared.StopDataCollectionByAgentIdsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopDataCollectionByAgentIdsXAmzTargetEnum;
}
export declare class StopDataCollectionByAgentIdsResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
    /**
     * Success
     */
    stopDataCollectionByAgentIdsResponse?: shared.StopDataCollectionByAgentIdsResponse;
}
