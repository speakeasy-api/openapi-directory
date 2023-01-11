import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEpisodesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEpisodesId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Episode;
    links?: shared.ResourceLink;
}
export declare class GetEpisodesIdRequest extends SpeakeasyBase {
    pathParams: GetEpisodesIdPathParams;
}
export declare class GetEpisodesIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getEpisodesId200ApplicationVndApiPlusJsonObject?: GetEpisodesId200ApplicationVndApiPlusJson;
}
