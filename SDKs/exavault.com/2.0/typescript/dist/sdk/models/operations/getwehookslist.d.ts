import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWehooksListQueryParams extends SpeakeasyBase {
    include?: string;
    limit?: number;
    offset?: number;
}
export declare class GetWehooksListHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetWehooksListRequest extends SpeakeasyBase {
    queryParams: GetWehooksListQueryParams;
    headers: GetWehooksListHeaders;
}
export declare class GetWehooksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookCollectionResponse?: shared.WebhookCollectionResponse;
}
