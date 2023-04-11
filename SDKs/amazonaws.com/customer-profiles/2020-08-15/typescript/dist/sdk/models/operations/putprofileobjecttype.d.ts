import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutProfileObjectTypeRequestBody extends SpeakeasyBase {
    /**
     * Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to <code>TRUE</code>, and if no match is found, then the service creates a new standard profile.
     */
    allowProfileCreation?: boolean;
    /**
     * Description of the profile object type.
     */
    description: string;
    /**
     * The customer-provided key to encrypt the profile object that will be created in this profile object type.
     */
    encryptionKey?: string;
    /**
     * The number of days until the data in the object expires.
     */
    expirationDays?: number;
    /**
     * A map of the name and ObjectType field.
     */
    fields?: Record<string, shared.ObjectTypeField>;
    /**
     * A list of unique keys that can be used to map data to the profile.
     */
    keys?: Record<string, shared.ObjectTypeKey[]>;
    /**
     * The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up.
     */
    sourceLastUpdatedTimestampFormat?: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Record<string, string>;
    /**
     * A unique identifier for the object template. For some attributes in the request, the service will use the default value from the object template when TemplateId is present. If these attributes are present in the request, the service may return a <code>BadRequestException</code>. These attributes include: AllowProfileCreation, SourceLastUpdatedTimestampFormat, Fields, and Keys. For example, if AllowProfileCreation is set to true when TemplateId is set, the service may return a <code>BadRequestException</code>.
     */
    templateId?: string;
}
export declare class PutProfileObjectTypeRequest extends SpeakeasyBase {
    /**
     * The unique name of the domain.
     */
    domainName: string;
    /**
     * The name of the profile object type.
     */
    objectTypeName: string;
    requestBody: PutProfileObjectTypeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutProfileObjectTypeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putProfileObjectTypeResponse?: shared.PutProfileObjectTypeResponse;
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
