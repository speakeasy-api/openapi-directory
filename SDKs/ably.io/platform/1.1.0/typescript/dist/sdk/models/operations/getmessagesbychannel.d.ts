import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessagesByChannelPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetMessagesByChannelQueryParams extends SpeakeasyBase {
    direction?: shared.FilterDirectionEnum;
    end?: string;
    format?: shared.ResponseFormatEnum;
    limit?: number;
    start?: string;
}
export declare class GetMessagesByChannelHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class GetMessagesByChannelRequest extends SpeakeasyBase {
    pathParams: GetMessagesByChannelPathParams;
    queryParams: GetMessagesByChannelQueryParams;
    headers: GetMessagesByChannelHeaders;
}
export declare class GetMessagesByChannelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    messages?: shared.Message[];
    statusCode: number;
    getMessagesByChannel2XXTextHTMLString?: string;
}
