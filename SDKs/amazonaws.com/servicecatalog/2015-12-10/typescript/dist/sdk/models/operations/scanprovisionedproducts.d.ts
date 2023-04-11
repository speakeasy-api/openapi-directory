import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ScanProvisionedProductsXAmzTargetEnum {
    Aws242ServiceCatalogServiceScanProvisionedProducts = "AWS242ServiceCatalogService.ScanProvisionedProducts"
}
export declare class ScanProvisionedProductsRequest extends SpeakeasyBase {
    scanProvisionedProductsInput: shared.ScanProvisionedProductsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ScanProvisionedProductsXAmzTargetEnum;
}
export declare class ScanProvisionedProductsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    scanProvisionedProductsOutput?: shared.ScanProvisionedProductsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
