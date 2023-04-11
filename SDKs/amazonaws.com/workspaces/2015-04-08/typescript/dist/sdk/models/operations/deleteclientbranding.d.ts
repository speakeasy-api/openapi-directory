import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteClientBrandingXAmzTargetEnum {
    WorkspacesServiceDeleteClientBranding = "WorkspacesService.DeleteClientBranding"
}
export declare class DeleteClientBrandingRequest extends SpeakeasyBase {
    deleteClientBrandingRequest: shared.DeleteClientBrandingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteClientBrandingXAmzTargetEnum;
}
export declare class DeleteClientBrandingResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteClientBrandingResult?: Record<string, any>;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
