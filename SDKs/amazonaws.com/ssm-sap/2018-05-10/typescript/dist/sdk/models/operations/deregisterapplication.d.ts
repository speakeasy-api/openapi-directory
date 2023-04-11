import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeregisterApplicationRequestBody extends SpeakeasyBase {
    /**
     * The ID of the application.
     */
    applicationId: string;
}
export declare class DeregisterApplicationRequest extends SpeakeasyBase {
    requestBody: DeregisterApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeregisterApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deregisterApplicationOutput?: Record<string, any>;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
