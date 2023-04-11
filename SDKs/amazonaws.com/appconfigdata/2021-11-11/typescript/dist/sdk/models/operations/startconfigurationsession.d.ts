import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartConfigurationSessionRequestBody extends SpeakeasyBase {
    /**
     * The application ID or the application name.
     */
    applicationIdentifier: string;
    /**
     * The configuration profile ID or the configuration profile name.
     */
    configurationProfileIdentifier: string;
    /**
     * The environment ID or the environment name.
     */
    environmentIdentifier: string;
    /**
     * Sets a constraint on a session. If you specify a value of, for example, 60 seconds, then the client that established the session can't call <a>GetLatestConfiguration</a> more frequently than every 60 seconds.
     */
    requiredMinimumPollIntervalInSeconds?: number;
}
export declare class StartConfigurationSessionRequest extends SpeakeasyBase {
    requestBody: StartConfigurationSessionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartConfigurationSessionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startConfigurationSessionResponse?: shared.StartConfigurationSessionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
