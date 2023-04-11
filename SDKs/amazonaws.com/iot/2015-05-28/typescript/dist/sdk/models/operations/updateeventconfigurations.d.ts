import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateEventConfigurationsRequestBody extends SpeakeasyBase {
    /**
     * The new event configuration values.
     */
    eventConfigurations?: Record<string, shared.Configuration>;
}
export declare class UpdateEventConfigurationsRequest extends SpeakeasyBase {
    requestBody: UpdateEventConfigurationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateEventConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateEventConfigurationsResponse?: Record<string, any>;
}
