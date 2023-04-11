import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartApplicationXAmzTargetEnum {
    KinesisAnalytics20180523StartApplication = "KinesisAnalytics_20180523.StartApplication"
}
export declare class StartApplicationRequest extends SpeakeasyBase {
    startApplicationRequest: shared.StartApplicationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartApplicationXAmzTargetEnum;
}
export declare class StartApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidApplicationConfigurationException
     */
    invalidApplicationConfigurationException?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startApplicationResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
