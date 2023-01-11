import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMetadataOfAllChannelsByEnum {
    Value = "value",
    Id = "id"
}
export declare class GetMetadataOfAllChannelsQueryParams extends SpeakeasyBase {
    by?: GetMetadataOfAllChannelsByEnum;
    format?: shared.ResponseFormatEnum;
    limit?: number;
    prefix?: string;
}
export declare class GetMetadataOfAllChannelsHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class GetMetadataOfAllChannelsRequest extends SpeakeasyBase {
    queryParams: GetMetadataOfAllChannelsQueryParams;
    headers: GetMetadataOfAllChannelsHeaders;
}
export declare class GetMetadataOfAllChannelsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.ErrorT;
    headers: Record<string, string[]>;
    statusCode: number;
    getMetadataOfAllChannels2XXApplicationJSONOneOf?: any;
    getMetadataOfAllChannels2XXTextHTMLString?: string;
}
