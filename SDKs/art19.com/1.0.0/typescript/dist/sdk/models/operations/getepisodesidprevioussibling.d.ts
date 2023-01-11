import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEpisodesIdPreviousSiblingPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEpisodesIdPreviousSiblingQueryParams extends SpeakeasyBase {
    rss?: boolean;
}
export declare class GetEpisodesIdPreviousSibling200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Episode;
    links?: shared.ResourceLink;
}
export declare class GetEpisodesIdPreviousSiblingRequest extends SpeakeasyBase {
    pathParams: GetEpisodesIdPreviousSiblingPathParams;
    queryParams: GetEpisodesIdPreviousSiblingQueryParams;
}
export declare class GetEpisodesIdPreviousSiblingResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getEpisodesIdPreviousSibling200ApplicationVndApiPlusJsonObject?: GetEpisodesIdPreviousSibling200ApplicationVndApiPlusJson;
}
