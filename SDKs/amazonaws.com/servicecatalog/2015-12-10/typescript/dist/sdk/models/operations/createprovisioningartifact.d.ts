import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateProvisioningArtifact = "AWS242ServiceCatalogService.CreateProvisioningArtifact"
}
export declare class CreateProvisioningArtifactRequest extends SpeakeasyBase {
    createProvisioningArtifactInput: shared.CreateProvisioningArtifactInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProvisioningArtifactXAmzTargetEnum;
}
export declare class CreateProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createProvisioningArtifactOutput?: shared.CreateProvisioningArtifactOutput;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
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
