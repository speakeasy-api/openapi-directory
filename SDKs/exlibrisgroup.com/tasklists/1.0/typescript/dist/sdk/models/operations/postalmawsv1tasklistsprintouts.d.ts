import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlmawsV1TaskListsPrintoutsQueryParams extends SpeakeasyBase {
    letter?: string;
    op: string;
    printerId?: string;
    printoutId?: string;
    status?: string;
}
export declare class PostAlmawsV1TaskListsPrintoutsRequest extends SpeakeasyBase {
    queryParams: PostAlmawsV1TaskListsPrintoutsQueryParams;
}
export declare class PostAlmawsV1TaskListsPrintoutsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema?: shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema;
}
