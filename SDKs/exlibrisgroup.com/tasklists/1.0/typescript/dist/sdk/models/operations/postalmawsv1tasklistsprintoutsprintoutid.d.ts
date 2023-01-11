import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlmawsV1TaskListsPrintoutsPrintoutIdPathParams extends SpeakeasyBase {
    printoutId: string;
}
export declare class PostAlmawsV1TaskListsPrintoutsPrintoutIdQueryParams extends SpeakeasyBase {
    op: string;
}
export declare class PostAlmawsV1TaskListsPrintoutsPrintoutIdRequest extends SpeakeasyBase {
    pathParams: PostAlmawsV1TaskListsPrintoutsPrintoutIdPathParams;
    queryParams: PostAlmawsV1TaskListsPrintoutsPrintoutIdQueryParams;
}
export declare class PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems?: shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems;
}
