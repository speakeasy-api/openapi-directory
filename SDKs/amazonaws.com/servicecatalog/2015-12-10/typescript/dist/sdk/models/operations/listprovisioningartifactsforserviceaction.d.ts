import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListProvisioningArtifactsForServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceListProvisioningArtifactsForServiceAction = "AWS242ServiceCatalogService.ListProvisioningArtifactsForServiceAction"
}
export declare class ListProvisioningArtifactsForServiceActionRequest extends SpeakeasyBase {
    listProvisioningArtifactsForServiceActionInput: shared.ListProvisioningArtifactsForServiceActionInput;
    /**
     * Pagination limit
     */
    pageSize?: string;
    /**
     * Pagination token
     */
    pageToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProvisioningArtifactsForServiceActionXAmzTargetEnum;
}
export declare class ListProvisioningArtifactsForServiceActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listProvisioningArtifactsForServiceActionOutput?: shared.ListProvisioningArtifactsForServiceActionOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
