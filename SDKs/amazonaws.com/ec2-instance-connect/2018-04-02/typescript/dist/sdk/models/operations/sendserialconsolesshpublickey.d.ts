import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendSerialConsoleSSHPublicKeyXAmzTargetEnum {
    Awsec2InstanceConnectServiceSendSerialConsoleSSHPublicKey = "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey"
}
export declare class SendSerialConsoleSSHPublicKeyRequest extends SpeakeasyBase {
    sendSerialConsoleSSHPublicKeyRequest: shared.SendSerialConsoleSSHPublicKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendSerialConsoleSSHPublicKeyXAmzTargetEnum;
}
export declare class SendSerialConsoleSSHPublicKeyResponse extends SpeakeasyBase {
    /**
     * AuthException
     */
    authException?: any;
    contentType: string;
    /**
     * EC2InstanceNotFoundException
     */
    ec2InstanceNotFoundException?: any;
    /**
     * EC2InstanceStateInvalidException
     */
    ec2InstanceStateInvalidException?: any;
    /**
     * EC2InstanceTypeInvalidException
     */
    ec2InstanceTypeInvalidException?: any;
    /**
     * EC2InstanceUnavailableException
     */
    ec2InstanceUnavailableException?: any;
    /**
     * InvalidArgsException
     */
    invalidArgsException?: any;
    /**
     * Success
     */
    sendSerialConsoleSSHPublicKeyResponse?: shared.SendSerialConsoleSSHPublicKeyResponse;
    /**
     * SerialConsoleSessionUnavailableException
     */
    serialConsoleSessionUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SerialConsoleAccessDisabledException
     */
    serialConsoleAccessDisabledException?: any;
    /**
     * SerialConsoleSessionLimitExceededException
     */
    serialConsoleSessionLimitExceededException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
