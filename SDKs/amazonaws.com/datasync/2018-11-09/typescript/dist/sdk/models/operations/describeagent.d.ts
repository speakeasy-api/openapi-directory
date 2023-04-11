import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAgentXAmzTargetEnum {
    FmrsServiceDescribeAgent = "FmrsService.DescribeAgent"
}
export declare class DescribeAgentRequest extends SpeakeasyBase {
    describeAgentRequest: shared.DescribeAgentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAgentXAmzTargetEnum;
}
export declare class DescribeAgentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAgentResponse?: shared.DescribeAgentResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
