import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddApplicationOutputXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationOutput = "KinesisAnalytics_20180523.AddApplicationOutput"
}
export declare class AddApplicationOutputRequest extends SpeakeasyBase {
    addApplicationOutputRequest: shared.AddApplicationOutputRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationOutputXAmzTargetEnum;
}
export declare class AddApplicationOutputResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addApplicationOutputResponse?: shared.AddApplicationOutputResponse;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
