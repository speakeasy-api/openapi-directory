import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAssessmentFrameworkRequestBody extends SpeakeasyBase {
    /**
     *  The compliance type that the new custom framework supports, such as CIS or HIPAA.
     */
    complianceType?: string;
    /**
     *  The control sets that are associated with the framework.
     */
    controlSets: shared.CreateAssessmentFrameworkControlSet[];
    /**
     *  An optional description for the new custom framework.
     */
    description?: string;
    /**
     *  The name of the new custom framework.
     */
    name: string;
    /**
     *  The tags that are associated with the framework.
     */
    tags?: Record<string, string>;
}
export declare class CreateAssessmentFrameworkRequest extends SpeakeasyBase {
    requestBody: CreateAssessmentFrameworkRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAssessmentFrameworkResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createAssessmentFrameworkResponse?: shared.CreateAssessmentFrameworkResponse;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
