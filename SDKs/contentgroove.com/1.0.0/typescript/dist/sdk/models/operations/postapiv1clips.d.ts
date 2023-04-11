import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1ClipsSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
export declare class PostApiV1ClipsRequestBodyDataAttributes extends SpeakeasyBase {
    endTime: number;
    mediaId: string;
    name: string;
    startTime: number;
}
export declare class PostApiV1ClipsRequestBodyData extends SpeakeasyBase {
    attributes: PostApiV1ClipsRequestBodyDataAttributes;
}
export declare class PostApiV1ClipsRequestBody extends SpeakeasyBase {
    data: PostApiV1ClipsRequestBodyData;
}
export declare class PostApiV1ClipsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
