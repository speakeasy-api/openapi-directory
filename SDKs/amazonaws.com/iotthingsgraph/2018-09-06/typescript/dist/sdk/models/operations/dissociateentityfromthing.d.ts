import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DissociateEntityFromThingXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDissociateEntityFromThing = "IotThingsGraphFrontEndService.DissociateEntityFromThing"
}
export declare class DissociateEntityFromThingRequest extends SpeakeasyBase {
    dissociateEntityFromThingRequest: shared.DissociateEntityFromThingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DissociateEntityFromThingXAmzTargetEnum;
}
export declare class DissociateEntityFromThingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    dissociateEntityFromThingResponse?: Record<string, any>;
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
