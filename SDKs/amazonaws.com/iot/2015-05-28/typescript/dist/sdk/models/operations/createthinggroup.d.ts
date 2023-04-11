import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Thing group properties.
 */
export declare class CreateThingGroupRequestBodyThingGroupProperties extends SpeakeasyBase {
    attributePayload?: shared.AttributePayload;
    thingGroupDescription?: string;
}
export declare class CreateThingGroupRequestBody extends SpeakeasyBase {
    /**
     * The name of the parent thing group.
     */
    parentGroupName?: string;
    /**
     * Metadata which can be used to manage the thing group.
     */
    tags?: shared.Tag[];
    /**
     * Thing group properties.
     */
    thingGroupProperties?: CreateThingGroupRequestBodyThingGroupProperties;
}
export declare class CreateThingGroupRequest extends SpeakeasyBase {
    requestBody: CreateThingGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The thing group name to create.
     */
    thingGroupName: string;
}
export declare class CreateThingGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createThingGroupResponse?: shared.CreateThingGroupResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
