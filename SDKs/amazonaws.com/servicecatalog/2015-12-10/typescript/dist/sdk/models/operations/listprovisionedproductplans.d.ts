import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListProvisionedProductPlansXAmzTargetEnum {
    Aws242ServiceCatalogServiceListProvisionedProductPlans = "AWS242ServiceCatalogService.ListProvisionedProductPlans"
}
export declare class ListProvisionedProductPlansRequest extends SpeakeasyBase {
    listProvisionedProductPlansInput: shared.ListProvisionedProductPlansInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListProvisionedProductPlansXAmzTargetEnum;
}
export declare class ListProvisionedProductPlansResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * Success
     */
    listProvisionedProductPlansOutput?: shared.ListProvisionedProductPlansOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
