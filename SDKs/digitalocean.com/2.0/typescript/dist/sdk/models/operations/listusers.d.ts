import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUsersPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class ListUsers401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListUsersRequest extends SpeakeasyBase {
    pathParams: ListUsersPathParams;
}
export declare class ListUsersResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listUsers200ApplicationJSONAny?: any;
    listUsers401ApplicationJSONObject?: ListUsers401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
