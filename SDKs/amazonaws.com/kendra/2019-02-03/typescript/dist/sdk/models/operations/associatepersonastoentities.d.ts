import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociatePersonasToEntitiesXAmzTargetEnum {
    AWSKendraFrontendServiceAssociatePersonasToEntities = "AWSKendraFrontendService.AssociatePersonasToEntities"
}
export declare class AssociatePersonasToEntitiesRequest extends SpeakeasyBase {
    associatePersonasToEntitiesRequest: shared.AssociatePersonasToEntitiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociatePersonasToEntitiesXAmzTargetEnum;
}
export declare class AssociatePersonasToEntitiesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    associatePersonasToEntitiesResponse?: shared.AssociatePersonasToEntitiesResponse;
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
