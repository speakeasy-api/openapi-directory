import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
 */
export declare class UpdateSegmentRequestBodyWriteSegmentRequest extends SpeakeasyBase {
    dimensions?: shared.SegmentDimensions;
    name?: string;
    segmentGroups?: shared.SegmentGroupList;
    tags?: Record<string, string>;
}
export declare class UpdateSegmentRequestBody extends SpeakeasyBase {
    /**
     * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
     */
    writeSegmentRequest: UpdateSegmentRequestBodyWriteSegmentRequest;
}
export declare class UpdateSegmentRequest extends SpeakeasyBase {
    requestBody: UpdateSegmentRequestBody;
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
     * The unique identifier for the segment.
     */
    segmentId: string;
}
export declare class UpdateSegmentResponse extends SpeakeasyBase {
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
    updateSegmentResponse?: shared.UpdateSegmentResponse;
}
