import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteApplicationOutputXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationOutput = "KinesisAnalytics_20180523.DeleteApplicationOutput"
}
export declare class DeleteApplicationOutputRequest extends SpeakeasyBase {
    deleteApplicationOutputRequest: shared.DeleteApplicationOutputRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationOutputXAmzTargetEnum;
}
export declare class DeleteApplicationOutputResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteApplicationOutputResponse?: shared.DeleteApplicationOutputResponse;
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
