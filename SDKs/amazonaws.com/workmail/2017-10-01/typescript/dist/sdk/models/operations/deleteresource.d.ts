import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResourceXAmzTargetEnum {
    WorkMailServiceDeleteResource = "WorkMailService.DeleteResource"
}
export declare class DeleteResourceRequest extends SpeakeasyBase {
    deleteResourceRequest: shared.DeleteResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourceXAmzTargetEnum;
}
export declare class DeleteResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteResourceResponse?: Record<string, any>;
    /**
     * EntityStateException
     */
    entityStateException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
