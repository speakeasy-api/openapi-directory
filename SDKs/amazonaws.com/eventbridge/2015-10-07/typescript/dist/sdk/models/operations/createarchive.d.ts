import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateArchiveXAmzTargetEnum {
    AWSEventsCreateArchive = "AWSEvents.CreateArchive"
}
export declare class CreateArchiveRequest extends SpeakeasyBase {
    createArchiveRequest: shared.CreateArchiveRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateArchiveXAmzTargetEnum;
}
export declare class CreateArchiveResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createArchiveResponse?: shared.CreateArchiveResponse;
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
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
}
