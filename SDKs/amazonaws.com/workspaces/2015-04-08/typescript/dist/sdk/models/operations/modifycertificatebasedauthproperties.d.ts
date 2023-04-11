import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyCertificateBasedAuthPropertiesXAmzTargetEnum {
    WorkspacesServiceModifyCertificateBasedAuthProperties = "WorkspacesService.ModifyCertificateBasedAuthProperties"
}
export declare class ModifyCertificateBasedAuthPropertiesRequest extends SpeakeasyBase {
    modifyCertificateBasedAuthPropertiesRequest: shared.ModifyCertificateBasedAuthPropertiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyCertificateBasedAuthPropertiesXAmzTargetEnum;
}
export declare class ModifyCertificateBasedAuthPropertiesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * Success
     */
    modifyCertificateBasedAuthPropertiesResult?: Record<string, any>;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
