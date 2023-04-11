import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of resource associated with the application.
 */
export declare enum GetAssociatedResourceResourceTypeEnum {
    CfnStack = "CFN_STACK",
    ResourceTagValue = "RESOURCE_TAG_VALUE"
}
export declare class GetAssociatedResourceRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The name, ID, or ARN of the application.
     */
    application: string;
    /**
     * The name or ID of the resource associated with the application.
     */
    resource: string;
    /**
     * The type of resource associated with the application.
     */
    resourceType: GetAssociatedResourceResourceTypeEnum;
}
export declare class GetAssociatedResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAssociatedResourceResponse?: shared.GetAssociatedResourceResponse;
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
     * ValidationException
     */
    validationException?: any;
}
