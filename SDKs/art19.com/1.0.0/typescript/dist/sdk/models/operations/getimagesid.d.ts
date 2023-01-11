import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImagesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetImagesId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Image;
    links?: shared.ResourceLink;
}
export declare class GetImagesIdRequest extends SpeakeasyBase {
    pathParams: GetImagesIdPathParams;
}
export declare class GetImagesIdResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getImagesId200ApplicationVndApiPlusJsonObject?: GetImagesId200ApplicationVndApiPlusJson;
}
