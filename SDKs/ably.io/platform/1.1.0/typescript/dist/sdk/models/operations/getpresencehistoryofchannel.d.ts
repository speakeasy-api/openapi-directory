import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPresenceHistoryOfChannelPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetPresenceHistoryOfChannelQueryParams extends SpeakeasyBase {
    direction?: shared.FilterDirectionEnum;
    end?: string;
    format?: shared.ResponseFormatEnum;
    limit?: number;
    start?: string;
}
export declare class GetPresenceHistoryOfChannelHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class GetPresenceHistoryOfChannelRequest extends SpeakeasyBase {
    pathParams: GetPresenceHistoryOfChannelPathParams;
    queryParams: GetPresenceHistoryOfChannelQueryParams;
    headers: GetPresenceHistoryOfChannelHeaders;
}
export declare class GetPresenceHistoryOfChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.ErrorT;
    headers: Record<string, string[]>;
    presenceMessages?: shared.PresenceMessage[];
    statusCode: number;
    getPresenceHistoryOfChannel2XXTextHTMLString?: string;
}
