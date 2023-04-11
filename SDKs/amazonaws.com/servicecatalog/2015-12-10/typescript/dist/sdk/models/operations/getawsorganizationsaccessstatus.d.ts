import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAWSOrganizationsAccessStatusXAmzTargetEnum {
    Aws242ServiceCatalogServiceGetAWSOrganizationsAccessStatus = "AWS242ServiceCatalogService.GetAWSOrganizationsAccessStatus"
}
export declare class GetAWSOrganizationsAccessStatusRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAWSOrganizationsAccessStatusXAmzTargetEnum;
}
export declare class GetAWSOrganizationsAccessStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAWSOrganizationsAccessStatusOutput?: shared.GetAWSOrganizationsAccessStatusOutput;
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
