import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CopyResourcesHeaders extends SpeakeasyBase {
    evAccessToken: string;
    evApiKey: string;
}
export declare class CopyResourcesCopyResourcesRequestBody extends SpeakeasyBase {
    parentResource: string;
    resources: string[];
}
export declare class CopyResourcesRequest extends SpeakeasyBase {
    headers: CopyResourcesHeaders;
    request?: CopyResourcesCopyResourcesRequestBody;
}
export declare class CopyResourcesResponse extends SpeakeasyBase {
    contentType: string;
    resourceCopyMove?: shared.ResourceCopyMove;
    resourceMultiResponse?: shared.ResourceMultiResponse;
    statusCode: number;
}
