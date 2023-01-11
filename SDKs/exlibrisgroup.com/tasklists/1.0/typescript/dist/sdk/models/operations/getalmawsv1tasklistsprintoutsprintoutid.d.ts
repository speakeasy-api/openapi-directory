import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAlmawsV1TaskListsPrintoutsPrintoutIdPathParams extends SpeakeasyBase {
    printoutId: string;
}
export declare class GetAlmawsV1TaskListsPrintoutsPrintoutIdRequest extends SpeakeasyBase {
    pathParams: GetAlmawsV1TaskListsPrintoutsPrintoutIdPathParams;
}
export declare class GetAlmawsV1TaskListsPrintoutsPrintoutIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems?: shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems;
}
