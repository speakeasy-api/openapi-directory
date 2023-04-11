import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConnectionAliasPermissionsXAmzTargetEnum {
    WorkspacesServiceDescribeConnectionAliasPermissions = "WorkspacesService.DescribeConnectionAliasPermissions"
}
export declare class DescribeConnectionAliasPermissionsRequest extends SpeakeasyBase {
    describeConnectionAliasPermissionsRequest: shared.DescribeConnectionAliasPermissionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionAliasPermissionsXAmzTargetEnum;
}
export declare class DescribeConnectionAliasPermissionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeConnectionAliasPermissionsResult?: shared.DescribeConnectionAliasPermissionsResult;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * OperationNotSupportedException
     */
    operationNotSupportedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
