import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceBatchDisassociateServiceActionFromProvisioningArtifact = "AWS242ServiceCatalogService.BatchDisassociateServiceActionFromProvisioningArtifact"
}
export declare class BatchDisassociateServiceActionFromProvisioningArtifactRequest extends SpeakeasyBase {
    batchDisassociateServiceActionFromProvisioningArtifactInput: shared.BatchDisassociateServiceActionFromProvisioningArtifactInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum;
}
export declare class BatchDisassociateServiceActionFromProvisioningArtifactResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDisassociateServiceActionFromProvisioningArtifactOutput?: shared.BatchDisassociateServiceActionFromProvisioningArtifactOutput;
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
