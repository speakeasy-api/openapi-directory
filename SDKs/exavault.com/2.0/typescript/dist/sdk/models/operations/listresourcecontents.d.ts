import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResourceContentsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ListResourceContentsQueryParams extends SpeakeasyBase {
    include?: string;
    limit?: number;
    offset?: number;
    sort?: string;
    type?: string;
}
export declare class ListResourceContentsHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class ListResourceContentsRequest extends SpeakeasyBase {
    pathParams: ListResourceContentsPathParams;
    queryParams: ListResourceContentsQueryParams;
    headers: ListResourceContentsHeaders;
}
export declare class ListResourceContentsResponse extends SpeakeasyBase {
    contentType: string;
    resourceCollectionResponse?: shared.ResourceCollectionResponse;
    statusCode: number;
}
