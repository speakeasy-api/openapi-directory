import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostApiV1MediasSecurity extends SpeakeasyBase {
    bearerHeader: string;
}
export declare class PostApiV1MediasRequestBodyDataAttributes extends SpeakeasyBase {
    description?: string;
    name?: string;
    sourceUrl?: string;
    uploadId?: string;
}
export declare class PostApiV1MediasRequestBodyData extends SpeakeasyBase {
    attributes: PostApiV1MediasRequestBodyDataAttributes;
}
export declare class PostApiV1MediasRequestBody extends SpeakeasyBase {
    data: PostApiV1MediasRequestBodyData;
}
export declare class PostApiV1MediasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
