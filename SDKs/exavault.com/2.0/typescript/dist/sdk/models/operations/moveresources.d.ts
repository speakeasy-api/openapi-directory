import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MoveResourcesHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class MoveResourcesMoveResourcesRequestBody extends SpeakeasyBase {
    parentResource: string;
    resources: string[];
}
export declare class MoveResourcesRequest extends SpeakeasyBase {
    headers: MoveResourcesHeaders;
    request?: MoveResourcesMoveResourcesRequestBody;
}
export declare class MoveResourcesResponse extends SpeakeasyBase {
    contentType: string;
    resourceCopyMove?: shared.ResourceCopyMove;
    resourceMultiResponse?: shared.ResourceMultiResponse;
    statusCode: number;
}
