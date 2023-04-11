import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendSSHPublicKeyXAmzTargetEnum {
    Awsec2InstanceConnectServiceSendSSHPublicKey = "AWSEC2InstanceConnectService.SendSSHPublicKey"
}
export declare class SendSSHPublicKeyRequest extends SpeakeasyBase {
    sendSSHPublicKeyRequest: shared.SendSSHPublicKeyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendSSHPublicKeyXAmzTargetEnum;
}
export declare class SendSSHPublicKeyResponse extends SpeakeasyBase {
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
    sendSSHPublicKeyResponse?: shared.SendSSHPublicKeyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
