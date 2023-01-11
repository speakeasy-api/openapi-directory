import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResourcesQueryParams extends SpeakeasyBase {
    include?: string;
    limit?: number;
    name?: string;
    offset?: number;
    resource: string;
    sort?: string;
    type?: string;
}
export declare class ListResourcesHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class ListResourcesRequest extends SpeakeasyBase {
    queryParams: ListResourcesQueryParams;
    headers: ListResourcesHeaders;
}
export declare class ListResourcesResponse extends SpeakeasyBase {
    contentType: string;
    resourceCollectionResponse?: shared.ResourceCollectionResponse;
    statusCode: number;
}
