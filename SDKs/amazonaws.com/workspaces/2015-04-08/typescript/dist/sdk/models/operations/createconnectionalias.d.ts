import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateConnectionAliasXAmzTargetEnum {
    WorkspacesServiceCreateConnectionAlias = "WorkspacesService.CreateConnectionAlias"
}
export declare class CreateConnectionAliasRequest extends SpeakeasyBase {
    createConnectionAliasRequest: shared.CreateConnectionAliasRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConnectionAliasXAmzTargetEnum;
}
export declare class CreateConnectionAliasResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createConnectionAliasResult?: shared.CreateConnectionAliasResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * InvalidResourceStateException
     */
    invalidResourceStateException?: any;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
