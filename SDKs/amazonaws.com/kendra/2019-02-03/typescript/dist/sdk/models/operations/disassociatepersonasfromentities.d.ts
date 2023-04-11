import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociatePersonasFromEntitiesXAmzTargetEnum {
    AWSKendraFrontendServiceDisassociatePersonasFromEntities = "AWSKendraFrontendService.DisassociatePersonasFromEntities"
}
export declare class DisassociatePersonasFromEntitiesRequest extends SpeakeasyBase {
    disassociatePersonasFromEntitiesRequest: shared.DisassociatePersonasFromEntitiesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociatePersonasFromEntitiesXAmzTargetEnum;
}
export declare class DisassociatePersonasFromEntitiesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociatePersonasFromEntitiesResponse?: shared.DisassociatePersonasFromEntitiesResponse;
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
