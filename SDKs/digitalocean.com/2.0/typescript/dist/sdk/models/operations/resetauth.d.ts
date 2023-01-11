import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetAuthPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
    username: string;
}
export declare class ResetAuthRequestBody extends SpeakeasyBase {
    mysqlSettings?: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings;
}
export declare class ResetAuth200ApplicationJson extends SpeakeasyBase {
    user: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems;
}
export declare class ResetAuth401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ResetAuthRequest extends SpeakeasyBase {
    pathParams: ResetAuthPathParams;
    request: ResetAuthRequestBody;
}
export declare class ResetAuthResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    resetAuth200ApplicationJSONObject?: ResetAuth200ApplicationJson;
    resetAuth401ApplicationJSONObject?: ResetAuth401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
