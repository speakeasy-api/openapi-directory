import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
    username: string;
}
export declare class GetUser200ApplicationJson extends SpeakeasyBase {
    user: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems;
}
export declare class GetUser401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetUserRequest extends SpeakeasyBase {
    pathParams: GetUserPathParams;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getUser200ApplicationJSONObject?: GetUser200ApplicationJson;
    getUser401ApplicationJSONObject?: GetUser401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
