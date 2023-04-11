import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateConnectionAliasXAmzTargetEnum {
    WorkspacesServiceAssociateConnectionAlias = "WorkspacesService.AssociateConnectionAlias"
}
export declare class AssociateConnectionAliasRequest extends SpeakeasyBase {
    associateConnectionAliasRequest: shared.AssociateConnectionAliasRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateConnectionAliasXAmzTargetEnum;
}
export declare class AssociateConnectionAliasResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    associateConnectionAliasResult?: shared.AssociateConnectionAliasResult;
    contentType: string;
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
     * ResourceAssociatedException
     */
    resourceAssociatedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
