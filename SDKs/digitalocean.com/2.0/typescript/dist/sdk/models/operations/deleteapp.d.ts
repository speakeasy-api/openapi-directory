import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAppPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteApp200ApplicationJson extends SpeakeasyBase {
    id?: string;
}
export declare class DeleteApp401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteAppRequest extends SpeakeasyBase {
    pathParams: DeleteAppPathParams;
}
export declare class DeleteAppResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteApp200ApplicationJSONObject?: DeleteApp200ApplicationJson;
    deleteApp401ApplicationJSONObject?: DeleteApp401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
