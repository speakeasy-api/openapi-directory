import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPresenceOfChannelPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetPresenceOfChannelQueryParams extends SpeakeasyBase {
    clientId?: string;
    connectionId?: string;
    format?: shared.ResponseFormatEnum;
    limit?: number;
}
export declare class GetPresenceOfChannelHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class GetPresenceOfChannelRequest extends SpeakeasyBase {
    pathParams: GetPresenceOfChannelPathParams;
    queryParams: GetPresenceOfChannelQueryParams;
    headers: GetPresenceOfChannelHeaders;
}
export declare class GetPresenceOfChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.ErrorT;
    headers: Record<string, string[]>;
    presenceMessages?: shared.PresenceMessage[];
    statusCode: number;
    getPresenceOfChannel200TextHTMLString?: string;
}
