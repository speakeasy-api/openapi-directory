import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum DisableAWSOrganizationsAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisableAWSOrganizationsAccess = "AWS242ServiceCatalogService.DisableAWSOrganizationsAccess"
}
export declare class DisableAWSOrganizationsAccessRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableAWSOrganizationsAccessXAmzTargetEnum;
}
export declare class DisableAWSOrganizationsAccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disableAWSOrganizationsAccessOutput?: Record<string, any>;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
