import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetProvisionedProductOutputsXAmzTargetEnum {
    Aws242ServiceCatalogServiceGetProvisionedProductOutputs = "AWS242ServiceCatalogService.GetProvisionedProductOutputs"
}
export declare class GetProvisionedProductOutputsRequest extends SpeakeasyBase {
    getProvisionedProductOutputsInput: shared.GetProvisionedProductOutputsInput;
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
    xAmzTarget: GetProvisionedProductOutputsXAmzTargetEnum;
}
export declare class GetProvisionedProductOutputsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getProvisionedProductOutputsOutput?: shared.GetProvisionedProductOutputsOutput;
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
}
