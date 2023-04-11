import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProvisioningArtifactXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProvisioningArtifact = "AWS242ServiceCatalogService.DescribeProvisioningArtifact"
}
export declare class DescribeProvisioningArtifactRequest extends SpeakeasyBase {
    describeProvisioningArtifactInput: shared.DescribeProvisioningArtifactInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProvisioningArtifactXAmzTargetEnum;
}
export declare class DescribeProvisioningArtifactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProvisioningArtifactOutput?: shared.DescribeProvisioningArtifactOutput;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
