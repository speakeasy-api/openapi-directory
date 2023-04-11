import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of resource of which the application will be associated.
 */
export declare enum AssociateResourceResourceTypeEnum {
    CfnStack = "CFN_STACK",
    ResourceTagValue = "RESOURCE_TAG_VALUE"
}
export declare class AssociateResourceRequest extends SpeakeasyBase {
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
     * The name or ID of the resource of which the application will be associated.
     */
    resource: string;
    /**
     * The type of resource of which the application will be associated.
     */
    resourceType: AssociateResourceResourceTypeEnum;
}
export declare class AssociateResourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateResourceResponse?: shared.AssociateResourceResponse;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
