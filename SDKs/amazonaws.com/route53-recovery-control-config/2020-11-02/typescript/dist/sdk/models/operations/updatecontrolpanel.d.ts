import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateControlPanelRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the control panel.
     */
    controlPanelArn: string;
    /**
     * The name of the control panel.
     */
    controlPanelName: string;
}
export declare class UpdateControlPanelRequest extends SpeakeasyBase {
    requestBody: UpdateControlPanelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateControlPanelResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
     * Success
     */
    updateControlPanelResponse?: shared.UpdateControlPanelResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
