import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAttributeGroupRequestBody extends SpeakeasyBase {
    /**
     * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
     */
    attributes?: string;
    /**
     * The description of the attribute group that the user provides.
     */
    description?: string;
    /**
     * Deprecated: The new name of the attribute group. The name must be unique in the region in which you are updating the attribute group. Please do not use this field as we have stopped supporting name updates.
     */
    name?: string;
}
export declare class UpdateAttributeGroupRequest extends SpeakeasyBase {
    requestBody: UpdateAttributeGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The name, ID, or ARN of the attribute group that holds the attributes to describe the application.
     */
    attributeGroup: string;
}
export declare class UpdateAttributeGroupResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
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
     * Success
     */
    updateAttributeGroupResponse?: shared.UpdateAttributeGroupResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
