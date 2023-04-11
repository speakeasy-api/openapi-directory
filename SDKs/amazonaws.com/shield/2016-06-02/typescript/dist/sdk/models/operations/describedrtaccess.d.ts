import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDRTAccessXAmzTargetEnum {
    AWSShield20160616DescribeDRTAccess = "AWSShield_20160616.DescribeDRTAccess"
}
export declare class DescribeDRTAccessRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDRTAccessXAmzTargetEnum;
}
export declare class DescribeDRTAccessResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDRTAccessResponse?: shared.DescribeDRTAccessResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
