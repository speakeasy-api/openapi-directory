import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of the resource that is being disassociated.
 */
export declare enum DisassociateResourceResourceTypeEnum {
    CfnStack = "CFN_STACK",
    ResourceTagValue = "RESOURCE_TAG_VALUE"
}
export declare class DisassociateResourceRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name or ID of the application.
     */
    application: string;
    /**
     * The name or ID of the resource.
     */
    resource: string;
    /**
     * The type of the resource that is being disassociated.
     */
    resourceType: DisassociateResourceResourceTypeEnum;
}
export declare class DisassociateResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateResourceResponse?: shared.DisassociateResourceResponse;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
