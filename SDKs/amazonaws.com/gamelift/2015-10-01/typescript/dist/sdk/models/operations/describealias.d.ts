import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAliasXAmzTargetEnum {
    GameLiftDescribeAlias = "GameLift.DescribeAlias"
}
export declare class DescribeAliasRequest extends SpeakeasyBase {
    describeAliasInput: shared.DescribeAliasInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAliasXAmzTargetEnum;
}
export declare class DescribeAliasResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAliasOutput?: shared.DescribeAliasOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
