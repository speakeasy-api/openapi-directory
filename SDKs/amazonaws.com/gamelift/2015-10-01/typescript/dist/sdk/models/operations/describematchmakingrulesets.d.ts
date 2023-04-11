import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMatchmakingRuleSetsXAmzTargetEnum {
    GameLiftDescribeMatchmakingRuleSets = "GameLift.DescribeMatchmakingRuleSets"
}
export declare class DescribeMatchmakingRuleSetsRequest extends SpeakeasyBase {
    describeMatchmakingRuleSetsInput: shared.DescribeMatchmakingRuleSetsInput;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMatchmakingRuleSetsXAmzTargetEnum;
}
export declare class DescribeMatchmakingRuleSetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMatchmakingRuleSetsOutput?: shared.DescribeMatchmakingRuleSetsOutput;
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
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
