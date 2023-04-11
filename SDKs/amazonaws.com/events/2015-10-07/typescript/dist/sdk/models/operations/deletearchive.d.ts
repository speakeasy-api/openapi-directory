import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteArchiveXAmzTargetEnum {
    AWSEventsDeleteArchive = "AWSEvents.DeleteArchive"
}
export declare class DeleteArchiveRequest extends SpeakeasyBase {
    deleteArchiveRequest: shared.DeleteArchiveRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteArchiveXAmzTargetEnum;
}
export declare class DeleteArchiveResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteArchiveResponse?: Record<string, any>;
    /**
     * InternalException
     */
    internalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
