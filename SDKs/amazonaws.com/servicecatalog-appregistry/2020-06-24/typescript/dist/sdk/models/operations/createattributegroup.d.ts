import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAttributeGroupRequestBody extends SpeakeasyBase {
    /**
     * A JSON string in the form of nested key-value pairs that represent the attributes in the group and describes an application and its components.
     */
    attributes: string;
    /**
     * A unique identifier that you provide to ensure idempotency. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, the retry fails.
     */
    clientToken: string;
    /**
     * The description of the attribute group that the user provides.
     */
    description?: string;
    /**
     * The name of the attribute group.
     */
    name: string;
    /**
     * Key-value pairs you can use to associate with the attribute group.
     */
    tags?: Record<string, string>;
}
export declare class CreateAttributeGroupRequest extends SpeakeasyBase {
    requestBody: CreateAttributeGroupRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAttributeGroupResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createAttributeGroupResponse?: shared.CreateAttributeGroupResponse;
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
     * ValidationException
     */
    validationException?: any;
}
