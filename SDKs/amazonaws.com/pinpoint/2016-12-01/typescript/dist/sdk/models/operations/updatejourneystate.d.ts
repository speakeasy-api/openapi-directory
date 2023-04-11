import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Changes the status of a journey.
 */
export declare class UpdateJourneyStateRequestBodyJourneyStateRequest extends SpeakeasyBase {
    state?: shared.StateEnum;
}
export declare class UpdateJourneyStateRequestBody extends SpeakeasyBase {
    /**
     * Changes the status of a journey.
     */
    journeyStateRequest: UpdateJourneyStateRequestBodyJourneyStateRequest;
}
export declare class UpdateJourneyStateRequest extends SpeakeasyBase {
    requestBody: UpdateJourneyStateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
     */
    applicationId: string;
    /**
     * The unique identifier for the journey.
     */
    journeyId: string;
}
export declare class UpdateJourneyStateResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * MethodNotAllowedException
     */
    methodNotAllowedException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * PayloadTooLargeException
     */
    payloadTooLargeException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateJourneyStateResponse?: shared.UpdateJourneyStateResponse;
}
