import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExecuteProvisionedProductServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceExecuteProvisionedProductServiceAction = "AWS242ServiceCatalogService.ExecuteProvisionedProductServiceAction"
}
export declare class ExecuteProvisionedProductServiceActionRequest extends SpeakeasyBase {
    executeProvisionedProductServiceActionInput: shared.ExecuteProvisionedProductServiceActionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteProvisionedProductServiceActionXAmzTargetEnum;
}
export declare class ExecuteProvisionedProductServiceActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    executeProvisionedProductServiceActionOutput?: shared.ExecuteProvisionedProductServiceActionOutput;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
