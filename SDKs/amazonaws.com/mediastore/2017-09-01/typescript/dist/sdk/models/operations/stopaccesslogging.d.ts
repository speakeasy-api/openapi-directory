import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopAccessLoggingXAmzTargetEnum {
    MediaStore20170901StopAccessLogging = "MediaStore_20170901.StopAccessLogging"
}
export declare class StopAccessLoggingRequest extends SpeakeasyBase {
    stopAccessLoggingInput: shared.StopAccessLoggingInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopAccessLoggingXAmzTargetEnum;
}
export declare class StopAccessLoggingResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopAccessLoggingOutput?: Record<string, any>;
}
