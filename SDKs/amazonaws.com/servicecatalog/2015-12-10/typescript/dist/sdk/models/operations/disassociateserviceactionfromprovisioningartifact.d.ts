import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceDisassociateServiceActionFromProvisioningArtifact = "AWS242ServiceCatalogService.DisassociateServiceActionFromProvisioningArtifact"
}
export declare class DisassociateServiceActionFromProvisioningArtifactRequest extends SpeakeasyBase {
    disassociateServiceActionFromProvisioningArtifactInput: shared.DisassociateServiceActionFromProvisioningArtifactInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateServiceActionFromProvisioningArtifactXAmzTargetEnum;
}
export declare class DisassociateServiceActionFromProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateServiceActionFromProvisioningArtifactOutput?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
