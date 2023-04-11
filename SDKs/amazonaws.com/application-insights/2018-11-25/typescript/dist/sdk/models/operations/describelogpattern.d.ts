import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLogPatternXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeLogPattern = "EC2WindowsBarleyService.DescribeLogPattern"
}
export declare class DescribeLogPatternRequest extends SpeakeasyBase {
    describeLogPatternRequest: shared.DescribeLogPatternRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLogPatternXAmzTargetEnum;
}
export declare class DescribeLogPatternResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLogPatternResponse?: shared.DescribeLogPatternResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
