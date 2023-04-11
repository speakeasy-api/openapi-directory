import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopSolutionVersionCreationXAmzTargetEnum {
    AmazonPersonalizeStopSolutionVersionCreation = "AmazonPersonalize.StopSolutionVersionCreation"
}
export declare class StopSolutionVersionCreationRequest extends SpeakeasyBase {
    stopSolutionVersionCreationRequest: shared.StopSolutionVersionCreationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopSolutionVersionCreationXAmzTargetEnum;
}
export declare class StopSolutionVersionCreationResponse extends SpeakeasyBase {
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
