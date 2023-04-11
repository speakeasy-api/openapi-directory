import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The settings for client-side encryption for cryptographic computing.
 */
export declare class CreateCollaborationRequestBodyDataEncryptionMetadata extends SpeakeasyBase {
    allowCleartext?: boolean;
    allowDuplicates?: boolean;
    allowJoinsOnColumnsWithDifferentNames?: boolean;
    preserveNulls?: boolean;
}
/**
 * An indicator as to whether query logging has been enabled or disabled for the collaboration.
 */
export declare enum CreateCollaborationRequestBodyQueryLogStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class CreateCollaborationRequestBody extends SpeakeasyBase {
    /**
     * The display name of the collaboration creator.
     */
    creatorDisplayName: string;
    /**
     * The abilities granted to the collaboration creator.
     */
    creatorMemberAbilities: shared.MemberAbilityEnum[];
    /**
     * The settings for client-side encryption for cryptographic computing.
     */
    dataEncryptionMetadata?: CreateCollaborationRequestBodyDataEncryptionMetadata;
    /**
     * A description of the collaboration provided by the collaboration owner.
     */
    description: string;
    /**
     * A list of initial members, not including the creator. This list is immutable.
     */
    members: shared.MemberSpecification[];
    /**
     * The display name for a collaboration.
     */
    name: string;
    /**
     * An indicator as to whether query logging has been enabled or disabled for the collaboration.
     */
    queryLogStatus: CreateCollaborationRequestBodyQueryLogStatusEnum;
    /**
     * Map of tags assigned to a resource
     */
    tags?: Record<string, string>;
}
export declare class CreateCollaborationRequest extends SpeakeasyBase {
    requestBody: CreateCollaborationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCollaborationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createCollaborationOutput?: shared.CreateCollaborationOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
