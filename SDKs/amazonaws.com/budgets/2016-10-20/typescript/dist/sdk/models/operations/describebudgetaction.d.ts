import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBudgetActionXAmzTargetEnum {
    AWSBudgetServiceGatewayDescribeBudgetAction = "AWSBudgetServiceGateway.DescribeBudgetAction"
}
export declare class DescribeBudgetActionRequest extends SpeakeasyBase {
    describeBudgetActionRequest: shared.DescribeBudgetActionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBudgetActionXAmzTargetEnum;
}
export declare class DescribeBudgetActionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeBudgetActionResponse?: shared.DescribeBudgetActionResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
