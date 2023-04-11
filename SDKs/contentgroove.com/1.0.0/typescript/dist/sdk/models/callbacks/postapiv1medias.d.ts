import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1MediasMediaProcessingFinishedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataAttributes extends SpeakeasyBase {
    createdAt?: string;
    description?: string;
    externalId?: string;
    hasFetchError?: boolean;
    isProcessing?: boolean;
    name?: string;
    originalCreatedAt?: string;
    processingStartedAt?: string;
    sourceCreatedAt?: string;
    sourceFileContentType?: string;
    sourceFileDuration?: number;
    sourceFileHeight?: number;
    sourceFilePreviewImageUrl?: string;
    sourceFileWidth?: number;
    sourceUrl?: string;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataRelationshipsClipsData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataRelationshipsClips extends SpeakeasyBase {
    data?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataRelationshipsClipsData[];
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataRelationships extends SpeakeasyBase {
    clips?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataRelationshipsClips;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataTranscriptionData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataTranscription extends SpeakeasyBase {
    data?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataTranscriptionData;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadData extends SpeakeasyBase {
    attributes?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataAttributes;
    id?: string;
    relationships?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataRelationships;
    transcription?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadDataTranscription;
    type?: string;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded2Attributes extends SpeakeasyBase {
    text?: string;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded2 extends SpeakeasyBase {
    attributes?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded2Attributes;
    id?: string;
    relationships?: Record<string, any>;
    type?: string;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded1Attributes extends SpeakeasyBase {
    createdAt?: string;
    endChar?: string;
    endTime?: number;
    externalId?: string;
    mediaFileContentType?: string;
    mediaFileDuration?: number;
    mediaFileHeight?: number;
    mediaFilePreviewImageUrl?: string;
    mediaFileUrl?: string;
    mediaFileWidth?: number;
    name?: string;
    rank?: number;
    startChar?: number;
    startTime?: number;
    text?: string;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded1RelationshipsMediaData extends SpeakeasyBase {
    id?: string;
    type?: string;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded1RelationshipsMedia extends SpeakeasyBase {
    data?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded1RelationshipsMediaData;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded1Relationships extends SpeakeasyBase {
    media?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded1RelationshipsMedia;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded1 extends SpeakeasyBase {
    attributes?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded1Attributes;
    id?: string;
    relationships?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadIncluded1Relationships;
    type?: string;
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBodyPayload extends SpeakeasyBase {
    data?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayloadData;
    included?: any[];
}
export declare class PostApiV1MediasMediaProcessingFinishedRequestBody extends SpeakeasyBase {
    event?: string;
    payload?: PostApiV1MediasMediaProcessingFinishedRequestBodyPayload;
}
