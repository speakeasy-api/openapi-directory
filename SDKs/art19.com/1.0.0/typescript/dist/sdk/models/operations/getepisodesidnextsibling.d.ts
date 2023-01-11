import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEpisodesIdNextSiblingPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEpisodesIdNextSiblingQueryParams extends SpeakeasyBase {
    rss?: boolean;
}
export declare class GetEpisodesIdNextSibling200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Episode;
    links?: shared.ResourceLink;
}
export declare class GetEpisodesIdNextSiblingRequest extends SpeakeasyBase {
    pathParams: GetEpisodesIdNextSiblingPathParams;
    queryParams: GetEpisodesIdNextSiblingQueryParams;
}
export declare class GetEpisodesIdNextSiblingResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getEpisodesIdNextSibling200ApplicationVndApiPlusJsonObject?: GetEpisodesIdNextSibling200ApplicationVndApiPlusJson;
}
