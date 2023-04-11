import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateArchiveXAmzTargetEnum {
    AWSEventsUpdateArchive = "AWSEvents.UpdateArchive"
}
export declare class UpdateArchiveRequest extends SpeakeasyBase {
    updateArchiveRequest: shared.UpdateArchiveRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateArchiveXAmzTargetEnum;
}
export declare class UpdateArchiveResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidEventPatternException
     */
    invalidEventPatternException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateArchiveResponse?: shared.UpdateArchiveResponse;
}
