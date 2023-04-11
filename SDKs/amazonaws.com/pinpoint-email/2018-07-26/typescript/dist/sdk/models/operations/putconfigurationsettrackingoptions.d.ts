import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutConfigurationSetTrackingOptionsRequestBody extends SpeakeasyBase {
    /**
     * The domain that you want to use for tracking open and click events.
     */
    customRedirectDomain?: string;
}
export declare class PutConfigurationSetTrackingOptionsRequest extends SpeakeasyBase {
    /**
     * The name of the configuration set that you want to add a custom tracking domain to.
     */
    configurationSetName: string;
    requestBody: PutConfigurationSetTrackingOptionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutConfigurationSetTrackingOptionsResponse extends SpeakeasyBase {
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
    putConfigurationSetTrackingOptionsResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
