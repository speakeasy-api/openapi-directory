import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceBatchAssociateServiceActionWithProvisioningArtifact = "AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact"
}
export declare class BatchAssociateServiceActionWithProvisioningArtifactRequest extends SpeakeasyBase {
    batchAssociateServiceActionWithProvisioningArtifactInput: shared.BatchAssociateServiceActionWithProvisioningArtifactInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;
}
export declare class BatchAssociateServiceActionWithProvisioningArtifactResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchAssociateServiceActionWithProvisioningArtifactOutput?: shared.BatchAssociateServiceActionWithProvisioningArtifactOutput;
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
