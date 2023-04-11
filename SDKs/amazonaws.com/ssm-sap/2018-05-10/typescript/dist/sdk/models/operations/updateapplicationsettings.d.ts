import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateApplicationSettingsRequestBody extends SpeakeasyBase {
    /**
     * The ID of the application.
     */
    applicationId: string;
    /**
     * The credentials to be added or updated.
     */
    credentialsToAddOrUpdate?: shared.ApplicationCredential[];
    /**
     * The credentials to be removed.
     */
    credentialsToRemove?: shared.ApplicationCredential[];
}
export declare class UpdateApplicationSettingsRequest extends SpeakeasyBase {
    requestBody: UpdateApplicationSettingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateApplicationSettingsResponse extends SpeakeasyBase {
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
    updateApplicationSettingsOutput?: shared.UpdateApplicationSettingsOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
