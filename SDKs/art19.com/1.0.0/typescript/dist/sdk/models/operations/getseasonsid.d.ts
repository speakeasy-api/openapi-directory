import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSeasonsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeasonsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Season;
    links?: shared.ResourceLink;
}
export declare class GetSeasonsIdRequest extends SpeakeasyBase {
    pathParams: GetSeasonsIdPathParams;
}
export declare class GetSeasonsIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getSeasonsId200ApplicationVndApiPlusJsonObject?: GetSeasonsId200ApplicationVndApiPlusJson;
}
