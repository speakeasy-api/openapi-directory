import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul>
 */
export declare enum UpdateEnvironmentRequestBodyFederationModeEnum {
    Federated = "FEDERATED",
    Local = "LOCAL"
}
/**
 * Configuration information when authentication mode is FEDERATED.
 */
export declare class UpdateEnvironmentRequestBodyFederationParameters extends SpeakeasyBase {
    applicationCallBackURL?: string;
    attributeMap?: Record<string, string>;
    federationProviderName?: string;
    federationURN?: string;
    samlMetadataDocument?: string;
    samlMetadataURL?: string;
}
export declare class UpdateEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * The description of the environment.
     */
    description?: string;
    /**
     * <p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul>
     */
    federationMode?: UpdateEnvironmentRequestBodyFederationModeEnum;
    /**
     * Configuration information when authentication mode is FEDERATED.
     */
    federationParameters?: UpdateEnvironmentRequestBodyFederationParameters;
    /**
     * The name of the environment.
     */
    name?: string;
}
export declare class UpdateEnvironmentRequest extends SpeakeasyBase {
    requestBody: UpdateEnvironmentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the FinSpace environment.
     */
    environmentId: string;
}
export declare class UpdateEnvironmentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
     * Success
     */
    updateEnvironmentResponse?: shared.UpdateEnvironmentResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
