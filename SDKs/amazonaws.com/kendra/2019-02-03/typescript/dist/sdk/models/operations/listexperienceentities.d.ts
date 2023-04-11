import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListExperienceEntitiesXAmzTargetEnum {
    AWSKendraFrontendServiceListExperienceEntities = "AWSKendraFrontendService.ListExperienceEntities"
}
export declare class ListExperienceEntitiesRequest extends SpeakeasyBase {
    listExperienceEntitiesRequest: shared.ListExperienceEntitiesRequest;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListExperienceEntitiesXAmzTargetEnum;
}
export declare class ListExperienceEntitiesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listExperienceEntitiesResponse?: shared.ListExperienceEntitiesResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
