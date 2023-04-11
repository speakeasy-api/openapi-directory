import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddApplicationOutputXAmzTargetEnum {
    KinesisAnalytics20150814AddApplicationOutput = "KinesisAnalytics_20150814.AddApplicationOutput"
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
    addApplicationOutputResponse?: Record<string, any>;
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
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
