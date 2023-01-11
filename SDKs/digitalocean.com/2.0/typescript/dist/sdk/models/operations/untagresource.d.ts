import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UntagResourcePathParams extends SpeakeasyBase {
    tagId: string;
}
export declare class UntagResource401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    pathParams: UntagResourcePathParams;
    request: shared.Onev21tags1Percent7BtagIdPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    untagResource401ApplicationJSONObject?: UntagResource401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
