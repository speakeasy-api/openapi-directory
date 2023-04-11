import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEventTrackerXAmzTargetEnum {
    AmazonPersonalizeCreateEventTracker = "AmazonPersonalize.CreateEventTracker"
}
export declare class CreateEventTrackerRequest extends SpeakeasyBase {
    createEventTrackerRequest: shared.CreateEventTrackerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEventTrackerXAmzTargetEnum;
}
export declare class CreateEventTrackerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createEventTrackerResponse?: shared.CreateEventTrackerResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
