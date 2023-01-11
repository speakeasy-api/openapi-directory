import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMetadataOfChannelPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetMetadataOfChannelQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
}
export declare class GetMetadataOfChannelHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class GetMetadataOfChannelRequest extends SpeakeasyBase {
    pathParams: GetMetadataOfChannelPathParams;
    queryParams: GetMetadataOfChannelQueryParams;
    headers: GetMetadataOfChannelHeaders;
}
export declare class GetMetadataOfChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    channelDetails?: shared.ChannelDetails;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
}
