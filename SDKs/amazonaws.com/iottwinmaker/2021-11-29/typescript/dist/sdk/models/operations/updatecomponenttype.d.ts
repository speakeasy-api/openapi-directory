import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateComponentTypeRequestBody extends SpeakeasyBase {
    /**
     * The component type name.
     */
    componentTypeName?: string;
    /**
     * The description of the component type.
     */
    description?: string;
    /**
     * Specifies the component type that this component type extends.
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
     * The property groups.
     */
    propertyGroups?: Record<string, shared.PropertyGroupRequest>;
}
export declare class UpdateComponentTypeRequest extends SpeakeasyBase {
    requestBody: UpdateComponentTypeRequestBody;
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
     * The ID of the workspace.
     */
    workspaceId: string;
}
export declare class UpdateComponentTypeResponse extends SpeakeasyBase {
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
     * Success
     */
    updateComponentTypeResponse?: shared.UpdateComponentTypeResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
