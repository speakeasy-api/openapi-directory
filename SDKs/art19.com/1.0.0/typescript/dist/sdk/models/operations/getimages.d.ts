import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImagesQueryParams extends SpeakeasyBase {
    ids: string[];
}
export declare class GetImages200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Image[];
    links?: shared.Links;
}
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
export declare class GetImages400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
    parameter?: string;
    pointer?: string;
}
export declare class GetImages400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
    code?: string;
    detail?: string;
    source?: GetImages400ApplicationVndApiPlusJsonErrorsSource;
    status?: string;
    title?: string;
}
export declare class GetImages400ApplicationVndApiPlusJson extends SpeakeasyBase {
    errors?: GetImages400ApplicationVndApiPlusJsonErrors[];
}
export declare class GetImagesRequest extends SpeakeasyBase {
    queryParams: GetImagesQueryParams;
}
export declare class GetImagesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getImages200ApplicationVndApiPlusJsonObject?: GetImages200ApplicationVndApiPlusJson;
    getImages400ApplicationVndApiPlusJsonObject?: GetImages400ApplicationVndApiPlusJson;
}
