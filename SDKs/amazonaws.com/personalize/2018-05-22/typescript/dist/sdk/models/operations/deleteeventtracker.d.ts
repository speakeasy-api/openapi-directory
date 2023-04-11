import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEventTrackerXAmzTargetEnum {
    AmazonPersonalizeDeleteEventTracker = "AmazonPersonalize.DeleteEventTracker"
}
export declare class DeleteEventTrackerRequest extends SpeakeasyBase {
    deleteEventTrackerRequest: shared.DeleteEventTrackerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEventTrackerXAmzTargetEnum;
}
export declare class DeleteEventTrackerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
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
