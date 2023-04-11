import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSolutionXAmzTargetEnum {
    AmazonPersonalizeCreateSolution = "AmazonPersonalize.CreateSolution"
}
export declare class CreateSolutionRequest extends SpeakeasyBase {
    createSolutionRequest: shared.CreateSolutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSolutionXAmzTargetEnum;
}
export declare class CreateSolutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSolutionResponse?: shared.CreateSolutionResponse;
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
