import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartAccessLoggingXAmzTargetEnum {
    MediaStore20170901StartAccessLogging = "MediaStore_20170901.StartAccessLogging"
}
export declare class StartAccessLoggingRequest extends SpeakeasyBase {
    startAccessLoggingInput: shared.StartAccessLoggingInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartAccessLoggingXAmzTargetEnum;
}
export declare class StartAccessLoggingResponse extends SpeakeasyBase {
    /**
     * ContainerInUseException
     */
    containerInUseException?: any;
    /**
     * ContainerNotFoundException
     */
    containerNotFoundException?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    startAccessLoggingOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
