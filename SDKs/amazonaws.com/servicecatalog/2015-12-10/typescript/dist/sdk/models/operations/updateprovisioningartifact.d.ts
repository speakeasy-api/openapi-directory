import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateProvisioningArtifact = "AWS242ServiceCatalogService.UpdateProvisioningArtifact"
}
export declare class UpdateProvisioningArtifactRequest extends SpeakeasyBase {
    updateProvisioningArtifactInput: shared.UpdateProvisioningArtifactInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProvisioningArtifactXAmzTargetEnum;
}
export declare class UpdateProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateProvisioningArtifactOutput?: shared.UpdateProvisioningArtifactOutput;
}
