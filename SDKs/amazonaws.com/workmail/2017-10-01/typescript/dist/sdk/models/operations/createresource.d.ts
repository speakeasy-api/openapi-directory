import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateResourceXAmzTargetEnum {
    WorkMailServiceCreateResource = "WorkMailService.CreateResource"
}
export declare class CreateResourceRequest extends SpeakeasyBase {
    createResourceRequest: shared.CreateResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResourceXAmzTargetEnum;
}
export declare class CreateResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createResourceResponse?: shared.CreateResourceResponse;
    /**
     * DirectoryServiceAuthenticationFailedException
     */
    directoryServiceAuthenticationFailedException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NameAvailabilityException
     */
    nameAvailabilityException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    /**
     * ReservedNameException
     */
    reservedNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
