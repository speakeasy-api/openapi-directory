import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAssessmentFrameworkRequestBody extends SpeakeasyBase {
    /**
     *  The compliance type that the new custom framework supports, such as CIS or HIPAA.
     */
    complianceType?: string;
    /**
     *  The control sets that are associated with the framework.
     */
    controlSets: shared.UpdateAssessmentFrameworkControlSet[];
    /**
     *  The description of the updated framework.
     */
    description?: string;
    /**
     *  The name of the framework to be updated.
     */
    name: string;
}
export declare class UpdateAssessmentFrameworkRequest extends SpeakeasyBase {
    requestBody: UpdateAssessmentFrameworkRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique identifier for the framework.
     */
    frameworkId: string;
}
export declare class UpdateAssessmentFrameworkResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateAssessmentFrameworkResponse?: shared.UpdateAssessmentFrameworkResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
