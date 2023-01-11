import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTagPathParams extends SpeakeasyBase {
    tagId: string;
}
export declare class DeleteTag401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteTagRequest extends SpeakeasyBase {
    pathParams: DeleteTagPathParams;
}
export declare class DeleteTagResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteTag401ApplicationJSONObject?: DeleteTag401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
