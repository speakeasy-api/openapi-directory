import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListServiceActionsForProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceListServiceActionsForProvisioningArtifact = "AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact"
}
export declare class ListServiceActionsForProvisioningArtifactRequest extends SpeakeasyBase {
    listServiceActionsForProvisioningArtifactInput: shared.ListServiceActionsForProvisioningArtifactInput;
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
    xAmzTarget: ListServiceActionsForProvisioningArtifactXAmzTargetEnum;
}
export declare class ListServiceActionsForProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listServiceActionsForProvisioningArtifactOutput?: shared.ListServiceActionsForProvisioningArtifactOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
