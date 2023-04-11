import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the configuration and other settings for a journey.
 */
export declare class UpdateJourneyRequestBodyWriteJourneyRequest extends SpeakeasyBase {
    activities?: Record<string, shared.Activity>;
    closedDays?: shared.ClosedDays;
    creationDate?: string;
    journeyChannelSettings?: shared.JourneyChannelSettings;
    lastModifiedDate?: string;
    limits?: shared.JourneyLimits;
    localTime?: boolean;
    name?: string;
    openHours?: shared.OpenHours;
    quietTime?: shared.QuietTime;
    refreshFrequency?: string;
    refreshOnSegmentUpdate?: boolean;
    schedule?: shared.JourneySchedule;
    sendingSchedule?: boolean;
    startActivity?: string;
    startCondition?: shared.StartCondition;
    state?: shared.StateEnum;
    waitForQuietTime?: boolean;
}
export declare class UpdateJourneyRequestBody extends SpeakeasyBase {
    /**
     * Specifies the configuration and other settings for a journey.
     */
    writeJourneyRequest: UpdateJourneyRequestBodyWriteJourneyRequest;
}
export declare class UpdateJourneyRequest extends SpeakeasyBase {
    requestBody: UpdateJourneyRequestBody;
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
export declare class UpdateJourneyResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
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
    updateJourneyResponse?: shared.UpdateJourneyResponse;
}
