import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListProvisioningArtifactsXAmzTargetEnum {
    Aws242ServiceCatalogServiceListProvisioningArtifacts = "AWS242ServiceCatalogService.ListProvisioningArtifacts"
}
export declare class ListProvisioningArtifactsRequest extends SpeakeasyBase {
    listProvisioningArtifactsInput: shared.ListProvisioningArtifactsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProvisioningArtifactsXAmzTargetEnum;
}
export declare class ListProvisioningArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listProvisioningArtifactsOutput?: shared.ListProvisioningArtifactsOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
