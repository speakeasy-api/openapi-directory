import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>
 */
export declare class GetClipRequestBodyClipFragmentSelector extends SpeakeasyBase {
    fragmentSelectorType?: shared.ClipFragmentSelectorTypeEnum;
    timestampRange?: shared.ClipTimestampRange;
}
export declare class GetClipRequestBody extends SpeakeasyBase {
    /**
     * <p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>
     */
    clipFragmentSelector: GetClipRequestBodyClipFragmentSelector;
    /**
     * <p>The Amazon Resource Name (ARN) of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>
     */
    streamARN?: string;
    /**
     * <p>The name of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>
     */
    streamName?: string;
}
export declare class GetClipRequest extends SpeakeasyBase {
    requestBody: GetClipRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetClipResponse extends SpeakeasyBase {
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    getClipOutput?: shared.GetClipOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidCodecPrivateDataException
     */
    invalidCodecPrivateDataException?: any;
    /**
     * InvalidMediaFrameException
     */
    invalidMediaFrameException?: any;
    /**
     * MissingCodecPrivateDataException
     */
    missingCodecPrivateDataException?: any;
    /**
     * NoDataRetentionException
     */
    noDataRetentionException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedStreamMediaTypeException
     */
    unsupportedStreamMediaTypeException?: any;
}
