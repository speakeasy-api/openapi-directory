import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenerateAccessLogsRequestBody extends SpeakeasyBase {
    /**
     *  The name of the domain.
     */
    domainName: string;
    /**
     *  The time at which the logs should end. The time range specified is inclusive of the end time.
     */
    endTime?: Date;
    /**
     *  The time at which the logs should start. The time range specified is inclusive of the start time.
     */
    startTime?: Date;
}
export declare class GenerateAccessLogsRequest extends SpeakeasyBase {
    requestBody: GenerateAccessLogsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The unique ID for an Amplify app.
     */
    appId: string;
}
export declare class GenerateAccessLogsResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    generateAccessLogsResult?: shared.GenerateAccessLogsResult;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
