import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteImagePathParams extends SpeakeasyBase {
    imageId: number;
}
export declare class DeleteImage401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteImageRequest extends SpeakeasyBase {
    pathParams: DeleteImagePathParams;
}
export declare class DeleteImageResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteImage401ApplicationJSONObject?: DeleteImage401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
