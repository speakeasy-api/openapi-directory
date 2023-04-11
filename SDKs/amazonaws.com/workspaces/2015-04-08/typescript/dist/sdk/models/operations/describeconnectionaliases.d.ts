import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeConnectionAliasesXAmzTargetEnum {
    WorkspacesServiceDescribeConnectionAliases = "WorkspacesService.DescribeConnectionAliases"
}
export declare class DescribeConnectionAliasesRequest extends SpeakeasyBase {
    describeConnectionAliasesRequest: shared.DescribeConnectionAliasesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionAliasesXAmzTargetEnum;
}
export declare class DescribeConnectionAliasesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeConnectionAliasesResult?: shared.DescribeConnectionAliasesResult;
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
}
