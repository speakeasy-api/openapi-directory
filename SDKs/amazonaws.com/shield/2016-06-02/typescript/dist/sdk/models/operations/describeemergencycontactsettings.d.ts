import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEmergencyContactSettingsXAmzTargetEnum {
    AWSShield20160616DescribeEmergencyContactSettings = "AWSShield_20160616.DescribeEmergencyContactSettings"
}
export declare class DescribeEmergencyContactSettingsRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEmergencyContactSettingsXAmzTargetEnum;
}
export declare class DescribeEmergencyContactSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEmergencyContactSettingsResponse?: shared.DescribeEmergencyContactSettingsResponse;
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
