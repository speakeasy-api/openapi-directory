import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateComponentTypeRequestBody extends SpeakeasyBase {
    /**
     * A friendly name for the component type.
     */
    componentTypeName?: string;
    /**
     * The description of the component type.
     */
    description?: string;
    /**
     * Specifies the parent component type to extend.
     */
    extendsFrom?: string[];
    /**
     * An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object.
     */
    functions?: Record<string, shared.FunctionRequest>;
    /**
     * A Boolean value that specifies whether an entity can have more than one component of this type.
     */
    isSingleton?: boolean;
    /**
     * An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.
     */
    propertyDefinitions?: Record<string, shared.PropertyDefinitionRequest>;
    /**
     * <p/>
     */
    propertyGroups?: Record<string, shared.PropertyGroupRequest>;
    /**
     * Metadata that you can use to manage the component type.
     */
    tags?: Record<string, string>;
}
export declare class CreateComponentTypeRequest extends SpeakeasyBase {
    requestBody: CreateComponentTypeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the component type.
     */
    componentTypeId: string;
    /**
     * The ID of the workspace that contains the component type.
     */
    workspaceId: string;
}
export declare class CreateComponentTypeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createComponentTypeResponse?: shared.CreateComponentTypeResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
