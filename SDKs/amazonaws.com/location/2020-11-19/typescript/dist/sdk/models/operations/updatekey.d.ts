import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * API Restrictions on the allowed actions, resources, and referers for an API key resource.
 */
export declare class UpdateKeyRequestBodyRestrictions extends SpeakeasyBase {
    allowActions?: string[];
    allowReferers?: string[];
    allowResources?: string[];
}
export declare class UpdateKeyRequestBody extends SpeakeasyBase {
    /**
     * Updates the description for the API key resource.
     */
    description?: string;
    /**
     * Updates the timestamp for when the API key resource will expire in <a href="https://www.iso.org/iso-8601-date-and-time-format.html"> ISO 8601</a> format: <code>YYYY-MM-DDThh:mm:ss.sssZ</code>.
     */
    expireTime?: Date;
    /**
     * <p>The boolean flag to be included for updating <code>ExpireTime</code> or <code>Restrictions</code> details.</p> <p>Must be set to <code>true</code> to update an API key resource that has been used in the past 7 days.</p> <p> <code>False</code> if force update is not preferred</p> <p>Default value: <code>False</code> </p>
     */
    forceUpdate?: boolean;
    /**
     * Whether the API key should expire. Set to <code>true</code> to set the API key to have no expiration time.
     */
    noExpiry?: boolean;
    /**
     * API Restrictions on the allowed actions, resources, and referers for an API key resource.
     */
    restrictions?: UpdateKeyRequestBodyRestrictions;
}
export declare class UpdateKeyRequest extends SpeakeasyBase {
    /**
     * The name of the API key resource to update.
     */
    keyName: string;
    requestBody: UpdateKeyRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateKeyResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateKeyResponse?: shared.UpdateKeyResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
