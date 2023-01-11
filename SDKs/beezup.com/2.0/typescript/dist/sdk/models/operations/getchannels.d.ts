import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelsPathParams extends SpeakeasyBase {
    countryIsoCode: string;
}
export declare class GetChannelsHeaders extends SpeakeasyBase {
    acceptEncoding: string[];
    ifNoneMatch?: string;
}
export declare class GetChannelsRequest extends SpeakeasyBase {
    pathParams: GetChannelsPathParams;
    headers: GetChannelsHeaders;
}
export declare class GetChannelsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    publicChannelInfoList?: shared.PublicChannelInfoList;
}
