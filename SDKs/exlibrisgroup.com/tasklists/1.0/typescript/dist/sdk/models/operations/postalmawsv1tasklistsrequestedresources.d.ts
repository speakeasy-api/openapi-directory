import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlmawsV1TaskListsRequestedResourcesQueryParams extends SpeakeasyBase {
    circDesk?: string;
    library?: string;
    location?: string;
    op?: string;
    pickupInst?: string;
    printed?: string;
    reported?: string;
}
export declare class PostAlmawsV1TaskListsRequestedResourcesRequest extends SpeakeasyBase {
    queryParams: PostAlmawsV1TaskListsRequestedResourcesQueryParams;
}
export declare class PostAlmawsV1TaskListsRequestedResourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema?: shared.Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema;
}
