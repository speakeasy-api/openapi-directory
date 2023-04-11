import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutConfigurationSetSendingOptionsRequestBody extends SpeakeasyBase {
    /**
     * If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set.
     */
    sendingEnabled?: boolean;
}
export declare class PutConfigurationSetSendingOptionsRequest extends SpeakeasyBase {
    /**
     * The name of the configuration set to enable or disable email sending for.
     */
    configurationSetName: string;
    requestBody: PutConfigurationSetSendingOptionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutConfigurationSetSendingOptionsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    putConfigurationSetSendingOptionsResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
