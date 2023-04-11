import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeBackupsXAmzTargetEnum {
    OpsWorksCMV20161101DescribeBackups = "OpsWorksCM_V2016_11_01.DescribeBackups"
}
export declare class DescribeBackupsRequest extends SpeakeasyBase {
    describeBackupsRequest: shared.DescribeBackupsRequest;
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
    xAmzTarget: DescribeBackupsXAmzTargetEnum;
}
export declare class DescribeBackupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeBackupsResponse?: shared.DescribeBackupsResponse;
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
