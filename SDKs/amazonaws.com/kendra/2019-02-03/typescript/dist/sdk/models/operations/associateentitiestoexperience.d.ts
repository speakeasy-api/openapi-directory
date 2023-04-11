import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateEntitiesToExperienceXAmzTargetEnum {
    AWSKendraFrontendServiceAssociateEntitiesToExperience = "AWSKendraFrontendService.AssociateEntitiesToExperience"
}
export declare class AssociateEntitiesToExperienceRequest extends SpeakeasyBase {
    associateEntitiesToExperienceRequest: shared.AssociateEntitiesToExperienceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateEntitiesToExperienceXAmzTargetEnum;
}
export declare class AssociateEntitiesToExperienceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    associateEntitiesToExperienceResponse?: shared.AssociateEntitiesToExperienceResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceAlreadyExistException
     */
    resourceAlreadyExistException?: any;
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
