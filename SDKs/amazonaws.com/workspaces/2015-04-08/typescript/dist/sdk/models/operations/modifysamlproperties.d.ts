import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifySamlPropertiesXAmzTargetEnum {
    WorkspacesServiceModifySamlProperties = "WorkspacesService.ModifySamlProperties"
}
export declare class ModifySamlPropertiesRequest extends SpeakeasyBase {
    modifySamlPropertiesRequest: shared.ModifySamlPropertiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifySamlPropertiesXAmzTargetEnum;
}
export declare class ModifySamlPropertiesResponse extends SpeakeasyBase {
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
    modifySamlPropertiesResult?: Record<string, any>;
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
