import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about the file that you're transcoding.
 */
export declare class CreateJobRequestBodyInput extends SpeakeasyBase {
    aspectRatio?: string;
    container?: string;
    detectedProperties?: shared.DetectedProperties;
    encryption?: shared.Encryption;
    frameRate?: string;
    inputCaptions?: shared.InputCaptions;
    interlaced?: string;
    key?: string;
    resolution?: string;
    timeSpan?: shared.TimeSpan;
}
/**
 * The <code>CreateJobOutput</code> structure.
 */
export declare class CreateJobRequestBodyOutput extends SpeakeasyBase {
    albumArt?: shared.JobAlbumArt;
    captions?: shared.Captions;
    composition?: shared.Clip[];
    encryption?: shared.Encryption;
    key?: string;
    presetId?: string;
    rotate?: string;
    segmentDuration?: string;
    thumbnailEncryption?: shared.Encryption;
    thumbnailPattern?: string;
    watermarks?: shared.JobWatermark[];
}
export declare class CreateJobRequestBody extends SpeakeasyBase {
    /**
     * Information about the file that you're transcoding.
     */
    input?: CreateJobRequestBodyInput;
    /**
     * A section of the request body that provides information about the files that are being transcoded.
     */
    inputs?: shared.JobInput[];
    /**
     * The <code>CreateJobOutput</code> structure.
     */
    output?: CreateJobRequestBodyOutput;
    /**
     * The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this job creates, including output files, thumbnails, and playlists.
     */
    outputKeyPrefix?: string;
    /**
     *  A section of the request body that provides information about the transcoded (target) files. We recommend that you use the <code>Outputs</code> syntax instead of the <code>Output</code> syntax.
     */
    outputs?: shared.CreateJobOutput[];
    /**
     * The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for transcoding. The pipeline determines several settings, including the Amazon S3 bucket from which Elastic Transcoder gets the files to transcode and the bucket into which Elastic Transcoder puts the transcoded files.
     */
    pipelineId: string;
    /**
     * <p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is fmp4 (Fragmented MP4) or ts (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create.</p> <p>The maximum number of master playlists in a job is 30.</p>
     */
    playlists?: shared.CreateJobPlaylist[];
    /**
     * User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job. Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same order in which you specify them.
     */
    userMetadata?: Record<string, string>;
}
export declare class CreateJobRequest extends SpeakeasyBase {
    requestBody: CreateJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createJobResponse?: shared.CreateJobResponse;
    /**
     * IncompatibleVersionException
     */
    incompatibleVersionException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
