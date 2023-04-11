import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCollaborationRequestBody extends SpeakeasyBase {
    /**
     * A description of the collaboration.
     */
    description?: string;
    /**
     * A human-readable identifier provided by the collaboration owner. Display names are not unique.
     */
    name?: string;
}
export declare class UpdateCollaborationRequest extends SpeakeasyBase {
    requestBody: UpdateCollaborationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier for the collaboration.
     */
    collaborationIdentifier: string;
}
export declare class UpdateCollaborationResponse extends SpeakeasyBase {
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateCollaborationOutput?: shared.UpdateCollaborationOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
