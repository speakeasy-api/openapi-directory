import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateControlRequestBody extends SpeakeasyBase {
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
    controlMappingSources: shared.ControlMappingSource[];
    /**
     *  The optional description of the control.
     */
    description?: string;
    /**
     *  The name of the updated control.
     */
    name: string;
    /**
     *  The steps that you should follow to determine if the control is met.
     */
    testingInformation?: string;
}
export declare class UpdateControlRequest extends SpeakeasyBase {
    requestBody: UpdateControlRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The identifier for the control.
     */
    controlId: string;
}
export declare class UpdateControlResponse extends SpeakeasyBase {
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
    updateControlResponse?: shared.UpdateControlResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
