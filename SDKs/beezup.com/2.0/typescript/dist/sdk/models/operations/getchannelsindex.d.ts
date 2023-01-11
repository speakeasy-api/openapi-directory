import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelsIndexHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetChannelsIndexRequest extends SpeakeasyBase {
    headers: GetChannelsIndexHeaders;
}
export declare class GetChannelsIndexResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    publicChannelIndex?: shared.PublicChannelIndex;
}
