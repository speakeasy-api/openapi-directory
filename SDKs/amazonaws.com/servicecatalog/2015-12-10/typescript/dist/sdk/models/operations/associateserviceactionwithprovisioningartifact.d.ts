import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateServiceActionWithProvisioningArtifact = "AWS242ServiceCatalogService.AssociateServiceActionWithProvisioningArtifact"
}
export declare class AssociateServiceActionWithProvisioningArtifactRequest extends SpeakeasyBase {
    associateServiceActionWithProvisioningArtifactInput: shared.AssociateServiceActionWithProvisioningArtifactInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateServiceActionWithProvisioningArtifactXAmzTargetEnum;
}
export declare class AssociateServiceActionWithProvisioningArtifactResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateServiceActionWithProvisioningArtifactOutput?: Record<string, any>;
    contentType: string;
    /**
     * DuplicateResourceException
     */
    duplicateResourceException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
