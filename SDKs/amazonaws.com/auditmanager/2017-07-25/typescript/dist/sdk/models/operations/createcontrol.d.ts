import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateControlRequestBody extends SpeakeasyBase {
    /**
     *  The recommended actions to carry out if the control isn't fulfilled.
     */
    actionPlanInstructions?: string;
    /**
     *  The title of the action plan for remediating the control.
     */
    actionPlanTitle?: string;
    /**
     *  The data mapping sources for the control.
     */
    controlMappingSources: shared.CreateControlMappingSource[];
    /**
     *  The description of the control.
     */
    description?: string;
    /**
     *  The name of the control.
     */
    name: string;
    /**
     *  The tags that are associated with the control.
     */
    tags?: Record<string, string>;
    /**
     *  The steps to follow to determine if the control is satisfied.
     */
    testingInformation?: string;
}
export declare class CreateControlRequest extends SpeakeasyBase {
    requestBody: CreateControlRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateControlResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createControlResponse?: shared.CreateControlResponse;
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
