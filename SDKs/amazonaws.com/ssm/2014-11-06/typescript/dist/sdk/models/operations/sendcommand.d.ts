import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendCommandXAmzTargetEnum {
    AmazonSSMSendCommand = "AmazonSSM.SendCommand"
}
export declare class SendCommandRequest extends SpeakeasyBase {
    sendCommandRequest: shared.SendCommandRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendCommandXAmzTargetEnum;
}
export declare class SendCommandResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DuplicateInstanceId
     */
    duplicateInstanceId?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidDocumentVersion
     */
    invalidDocumentVersion?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    /**
     * InvalidNotificationConfig
     */
    invalidNotificationConfig?: any;
    /**
     * InvalidOutputFolder
     */
    invalidOutputFolder?: any;
    /**
     * InvalidParameters
     */
    invalidParameters?: any;
    /**
     * InvalidRole
     */
    invalidRole?: any;
    /**
     * MaxDocumentSizeExceeded
     */
    maxDocumentSizeExceeded?: any;
    /**
     * Success
     */
    sendCommandResult?: shared.SendCommandResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedPlatformType
     */
    unsupportedPlatformType?: any;
}
