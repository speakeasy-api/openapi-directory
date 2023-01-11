import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddUserPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class AddUser201ApplicationJson extends SpeakeasyBase {
    user: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems;
}
export declare class AddUser401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AddUserRequest extends SpeakeasyBase {
    pathParams: AddUserPathParams;
    request: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsInput;
}
export declare class AddUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    addUser201ApplicationJSONObject?: AddUser201ApplicationJson;
    addUser401ApplicationJSONObject?: AddUser401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
