import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlmawsV1TaskListsRsLendingRequestsQueryParams extends SpeakeasyBase {
    library?: string;
    op?: string;
    partner?: string;
    printed?: string;
    reported?: string;
    requestedFormat?: string;
    status?: string;
    suppliedFormat?: string;
}
export declare class PostAlmawsV1TaskListsRsLendingRequestsRequest extends SpeakeasyBase {
    queryParams: PostAlmawsV1TaskListsRsLendingRequestsQueryParams;
}
export declare class PostAlmawsV1TaskListsRsLendingRequestsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems?: shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems;
}
