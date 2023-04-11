import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul>
 */
export declare enum CreateEnvironmentRequestBodyFederationModeEnum {
    Federated = "FEDERATED",
    Local = "LOCAL"
}
/**
 * Configuration information when authentication mode is FEDERATED.
 */
export declare class CreateEnvironmentRequestBodyFederationParameters extends SpeakeasyBase {
    applicationCallBackURL?: string;
    attributeMap?: Record<string, string>;
    federationProviderName?: string;
    federationURN?: string;
    samlMetadataDocument?: string;
    samlMetadataURL?: string;
}
/**
 * Configuration information for the superuser.
 */
export declare class CreateEnvironmentRequestBodySuperuserParameters extends SpeakeasyBase {
    emailAddress?: string;
    firstName?: string;
    lastName?: string;
}
export declare class CreateEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * <p>The list of Amazon Resource Names (ARN) of the data bundles to install. Currently supported data bundle ARNs:</p> <ul> <li> <p> <code>arn:aws:finspace:${Region}::data-bundle/capital-markets-sample</code> - Contains sample Capital Markets datasets, categories and controlled vocabularies.</p> </li> <li> <p> <code>arn:aws:finspace:${Region}::data-bundle/taq</code> (default) - Contains trades and quotes data in addition to sample Capital Markets data.</p> </li> </ul>
     */
    dataBundles?: string[];
    /**
     * The description of the FinSpace environment to be created.
     */
    description?: string;
    /**
     * <p>Authentication mode for the environment.</p> <ul> <li> <p> <code>FEDERATED</code> - Users access FinSpace through Single Sign On (SSO) via your Identity provider.</p> </li> <li> <p> <code>LOCAL</code> - Users access FinSpace via email and password managed within the FinSpace environment.</p> </li> </ul>
     */
    federationMode?: CreateEnvironmentRequestBodyFederationModeEnum;
    /**
     * Configuration information when authentication mode is FEDERATED.
     */
    federationParameters?: CreateEnvironmentRequestBodyFederationParameters;
    /**
     * The KMS key id to encrypt your data in the FinSpace environment.
     */
    kmsKeyId?: string;
    /**
     * The name of the FinSpace environment to be created.
     */
    name: string;
    /**
     * Configuration information for the superuser.
     */
    superuserParameters?: CreateEnvironmentRequestBodySuperuserParameters;
    /**
     * Add tags to your FinSpace environment.
     */
    tags?: Record<string, string>;
}
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    requestBody: CreateEnvironmentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createEnvironmentResponse?: shared.CreateEnvironmentResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
