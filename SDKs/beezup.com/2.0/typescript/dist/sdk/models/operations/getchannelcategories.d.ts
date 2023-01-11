import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCategoriesPathParams extends SpeakeasyBase {
    channelId: string;
}
export declare class GetChannelCategoriesHeaders extends SpeakeasyBase {
    acceptEncoding: string[];
}
export declare class GetChannelCategoriesRequest extends SpeakeasyBase {
    pathParams: GetChannelCategoriesPathParams;
    headers: GetChannelCategoriesHeaders;
}
export declare class GetChannelCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    channelRootCategory?: shared.ChannelRootCategory;
}
