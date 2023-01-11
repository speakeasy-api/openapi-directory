import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmailListsQueryParams extends SpeakeasyBase {
    include?: string;
}
export declare class GetEmailListsHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class GetEmailListsRequest extends SpeakeasyBase {
    queryParams: GetEmailListsQueryParams;
    headers: GetEmailListsHeaders;
}
export declare class GetEmailListsResponse extends SpeakeasyBase {
    contentType: string;
    emailListCollectionResponse?: shared.EmailListCollectionResponse;
    statusCode: number;
}
