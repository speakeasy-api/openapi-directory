import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The attribute payload.
 */
export declare class CreateThingRequestBodyAttributePayload extends SpeakeasyBase {
    attributes?: Record<string, string>;
    merge?: boolean;
}
export declare class CreateThingRequestBody extends SpeakeasyBase {
    /**
     * The attribute payload.
     */
    attributePayload?: CreateThingRequestBodyAttributePayload;
    /**
     * The name of the billing group the thing will be added to.
     */
    billingGroupName?: string;
    /**
     * The name of the thing type associated with the new thing.
     */
    thingTypeName?: string;
}
export declare class CreateThingRequest extends SpeakeasyBase {
    requestBody: CreateThingRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * <p>The name of the thing to create.</p> <p>You can't change a thing's name after you create it. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.</p>
     */
    thingName: string;
}
export declare class CreateThingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createThingResponse?: shared.CreateThingResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
