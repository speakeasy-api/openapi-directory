import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteProvisioningArtifact = "AWS242ServiceCatalogService.DeleteProvisioningArtifact"
}
export declare class DeleteProvisioningArtifactRequest extends SpeakeasyBase {
    deleteProvisioningArtifactInput: shared.DeleteProvisioningArtifactInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProvisioningArtifactXAmzTargetEnum;
}
export declare class DeleteProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteProvisioningArtifactOutput?: Record<string, any>;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
