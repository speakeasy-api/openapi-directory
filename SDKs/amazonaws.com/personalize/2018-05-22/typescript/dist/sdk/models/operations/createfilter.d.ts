import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFilterXAmzTargetEnum {
    AmazonPersonalizeCreateFilter = "AmazonPersonalize.CreateFilter"
}
export declare class CreateFilterRequest extends SpeakeasyBase {
    createFilterRequest: shared.CreateFilterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFilterXAmzTargetEnum;
}
export declare class CreateFilterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createFilterResponse?: shared.CreateFilterResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
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
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
