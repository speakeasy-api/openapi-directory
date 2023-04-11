import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TerminateProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceTerminateProvisionedProduct = "AWS242ServiceCatalogService.TerminateProvisionedProduct"
}
export declare class TerminateProvisionedProductRequest extends SpeakeasyBase {
    terminateProvisionedProductInput: shared.TerminateProvisionedProductInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateProvisionedProductXAmzTargetEnum;
}
export declare class TerminateProvisionedProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    terminateProvisionedProductOutput?: shared.TerminateProvisionedProductOutput;
}
