import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum EnableAWSOrganizationsAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceEnableAWSOrganizationsAccess = "AWS242ServiceCatalogService.EnableAWSOrganizationsAccess"
}
export declare class EnableAWSOrganizationsAccessRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableAWSOrganizationsAccessXAmzTargetEnum;
}
export declare class EnableAWSOrganizationsAccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    enableAWSOrganizationsAccessOutput?: Record<string, any>;
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
