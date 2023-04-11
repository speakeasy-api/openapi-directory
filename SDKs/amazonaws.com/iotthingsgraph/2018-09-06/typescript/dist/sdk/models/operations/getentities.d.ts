import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEntitiesXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetEntities = "IotThingsGraphFrontEndService.GetEntities"
}
export declare class GetEntitiesRequest extends SpeakeasyBase {
    getEntitiesRequest: shared.GetEntitiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEntitiesXAmzTargetEnum;
}
export declare class GetEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getEntitiesResponse?: shared.GetEntitiesResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
