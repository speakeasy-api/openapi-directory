import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeHandshakeXAmzTargetEnum {
    AWSOrganizationsV20161128DescribeHandshake = "AWSOrganizationsV20161128.DescribeHandshake"
}
export declare class DescribeHandshakeRequest extends SpeakeasyBase {
    describeHandshakeRequest: shared.DescribeHandshakeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHandshakeXAmzTargetEnum;
}
export declare class DescribeHandshakeResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    describeHandshakeResponse?: shared.DescribeHandshakeResponse;
    /**
     * HandshakeNotFoundException
     */
    handshakeNotFoundException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
