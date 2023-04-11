import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateServiceAction = "AWS242ServiceCatalogService.UpdateServiceAction"
}
export declare class UpdateServiceActionRequest extends SpeakeasyBase {
    updateServiceActionInput: shared.UpdateServiceActionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceActionXAmzTargetEnum;
}
export declare class UpdateServiceActionResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    updateServiceActionOutput?: shared.UpdateServiceActionOutput;
}
