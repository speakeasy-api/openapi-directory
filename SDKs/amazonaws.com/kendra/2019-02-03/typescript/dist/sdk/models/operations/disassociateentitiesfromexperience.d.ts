import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateEntitiesFromExperienceXAmzTargetEnum {
    AWSKendraFrontendServiceDisassociateEntitiesFromExperience = "AWSKendraFrontendService.DisassociateEntitiesFromExperience"
}
export declare class DisassociateEntitiesFromExperienceRequest extends SpeakeasyBase {
    disassociateEntitiesFromExperienceRequest: shared.DisassociateEntitiesFromExperienceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateEntitiesFromExperienceXAmzTargetEnum;
}
export declare class DisassociateEntitiesFromExperienceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateEntitiesFromExperienceResponse?: shared.DisassociateEntitiesFromExperienceResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
