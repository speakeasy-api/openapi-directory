import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteResourcesHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class DeleteResourcesDeleteResourcesRequestBody extends SpeakeasyBase {
    resources: string[];
}
export declare class DeleteResourcesRequest extends SpeakeasyBase {
    headers: DeleteResourcesHeaders;
    request?: DeleteResourcesDeleteResourcesRequestBody;
}
export declare class DeleteResourcesResponse extends SpeakeasyBase {
    contentType: string;
    emptyResponse?: shared.EmptyResponse;
    resourceMultiResponse?: shared.ResourceMultiResponse;
    statusCode: number;
}
