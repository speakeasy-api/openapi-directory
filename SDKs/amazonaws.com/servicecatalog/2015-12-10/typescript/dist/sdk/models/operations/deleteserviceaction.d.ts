import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteServiceAction = "AWS242ServiceCatalogService.DeleteServiceAction"
}
export declare class DeleteServiceActionRequest extends SpeakeasyBase {
    deleteServiceActionInput: shared.DeleteServiceActionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceActionXAmzTargetEnum;
}
export declare class DeleteServiceActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteServiceActionOutput?: Record<string, any>;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
