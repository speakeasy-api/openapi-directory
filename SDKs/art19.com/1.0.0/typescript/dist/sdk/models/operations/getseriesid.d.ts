import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSeriesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSeriesId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Series;
    links?: shared.ResourceLink;
}
export declare class GetSeriesIdRequest extends SpeakeasyBase {
    pathParams: GetSeriesIdPathParams;
}
export declare class GetSeriesIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getSeriesId200ApplicationVndApiPlusJsonObject?: GetSeriesId200ApplicationVndApiPlusJson;
}
