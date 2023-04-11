import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSolutionVersionXAmzTargetEnum {
    AmazonPersonalizeCreateSolutionVersion = "AmazonPersonalize.CreateSolutionVersion"
}
export declare class CreateSolutionVersionRequest extends SpeakeasyBase {
    createSolutionVersionRequest: shared.CreateSolutionVersionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSolutionVersionXAmzTargetEnum;
}
export declare class CreateSolutionVersionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSolutionVersionResponse?: shared.CreateSolutionVersionResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
