import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Parameters required for transcoding audio.
 */
export declare class CreatePresetRequestBodyAudio extends SpeakeasyBase {
    audioPackingMode?: string;
    bitRate?: string;
    channels?: string;
    codec?: string;
    codecOptions?: shared.AudioCodecOptions;
    sampleRate?: string;
}
/**
 * Thumbnails for videos.
 */
export declare class CreatePresetRequestBodyThumbnails extends SpeakeasyBase {
    aspectRatio?: string;
    format?: string;
    interval?: string;
    maxHeight?: string;
    maxWidth?: string;
    paddingPolicy?: string;
    resolution?: string;
    sizingPolicy?: string;
}
/**
 * The <code>VideoParameters</code> structure.
 */
export declare class CreatePresetRequestBodyVideo extends SpeakeasyBase {
    aspectRatio?: string;
    bitRate?: string;
    codec?: string;
    codecOptions?: Record<string, string>;
    displayAspectRatio?: string;
    fixedGOP?: string;
    frameRate?: string;
    keyframesMaxDist?: string;
    maxFrameRate?: string;
    maxHeight?: string;
    maxWidth?: string;
    paddingPolicy?: string;
    resolution?: string;
    sizingPolicy?: string;
    watermarks?: shared.PresetWatermark[];
}
export declare class CreatePresetRequestBody extends SpeakeasyBase {
    /**
     * Parameters required for transcoding audio.
     */
    audio?: CreatePresetRequestBodyAudio;
    /**
     * The container type for the output file. Valid values include <code>flac</code>, <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>, <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>, <code>ogg</code>, <code>ts</code>, and <code>webm</code>.
     */
    container: string;
    /**
     * A description of the preset.
     */
    description?: string;
    /**
     * The name of the preset. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.
     */
    name: string;
    /**
     * Thumbnails for videos.
     */
    thumbnails?: CreatePresetRequestBodyThumbnails;
    /**
     * The <code>VideoParameters</code> structure.
     */
    video?: CreatePresetRequestBodyVideo;
}
export declare class CreatePresetRequest extends SpeakeasyBase {
    requestBody: CreatePresetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreatePresetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createPresetResponse?: shared.CreatePresetResponse;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
