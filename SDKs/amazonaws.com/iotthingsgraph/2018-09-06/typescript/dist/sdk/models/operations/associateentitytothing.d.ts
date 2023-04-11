import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateEntityToThingXAmzTargetEnum {
    IotThingsGraphFrontEndServiceAssociateEntityToThing = "IotThingsGraphFrontEndService.AssociateEntityToThing"
}
export declare class AssociateEntityToThingRequest extends SpeakeasyBase {
    associateEntityToThingRequest: shared.AssociateEntityToThingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateEntityToThingXAmzTargetEnum;
}
export declare class AssociateEntityToThingResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateEntityToThingResponse?: Record<string, any>;
    contentType: string;
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
