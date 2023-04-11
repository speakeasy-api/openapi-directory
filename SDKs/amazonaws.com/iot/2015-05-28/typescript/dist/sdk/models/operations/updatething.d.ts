import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The attribute payload.
 */
export declare class UpdateThingRequestBodyAttributePayload extends SpeakeasyBase {
    attributes?: Record<string, string>;
    merge?: boolean;
}
export declare class UpdateThingRequestBody extends SpeakeasyBase {
    /**
     * The attribute payload.
     */
    attributePayload?: UpdateThingRequestBodyAttributePayload;
    /**
     * The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the <code>UpdateThing</code> request is rejected with a <code>VersionConflictException</code>.
     */
    expectedVersion?: number;
    /**
     * Remove a thing type association. If <b>true</b>, the association is removed.
     */
    removeThingType?: boolean;
    /**
     * The name of the thing type.
     */
    thingTypeName?: string;
}
export declare class UpdateThingRequest extends SpeakeasyBase {
    requestBody: UpdateThingRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * <p>The name of the thing to update.</p> <p>You can't change a thing's name. To change a thing's name, you must create a new thing, give it the new name, and then delete the old thing.</p>
     */
    thingName: string;
}
export declare class UpdateThingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
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
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateThingResponse?: Record<string, any>;
    /**
     * VersionConflictException
     */
    versionConflictException?: any;
}
