import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeServersXAmzTargetEnum {
    OpsWorksCMV20161101DescribeServers = "OpsWorksCM_V2016_11_01.DescribeServers"
}
export declare class DescribeServersRequest extends SpeakeasyBase {
    describeServersRequest: shared.DescribeServersRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
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
    xAmzTarget: DescribeServersXAmzTargetEnum;
}
export declare class DescribeServersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeServersResponse?: shared.DescribeServersResponse;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
