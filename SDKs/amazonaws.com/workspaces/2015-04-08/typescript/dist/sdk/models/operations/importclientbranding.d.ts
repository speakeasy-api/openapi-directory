import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportClientBrandingXAmzTargetEnum {
    WorkspacesServiceImportClientBranding = "WorkspacesService.ImportClientBranding"
}
export declare class ImportClientBrandingRequest extends SpeakeasyBase {
    importClientBrandingRequest: shared.ImportClientBrandingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportClientBrandingXAmzTargetEnum;
}
export declare class ImportClientBrandingResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    importClientBrandingResult?: shared.ImportClientBrandingResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
}
