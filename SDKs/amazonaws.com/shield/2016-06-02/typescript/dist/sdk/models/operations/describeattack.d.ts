import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAttackXAmzTargetEnum {
    AWSShield20160616DescribeAttack = "AWSShield_20160616.DescribeAttack"
}
export declare class DescribeAttackRequest extends SpeakeasyBase {
    describeAttackRequest: shared.DescribeAttackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAttackXAmzTargetEnum;
}
export declare class DescribeAttackResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAttackResponse?: shared.DescribeAttackResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
