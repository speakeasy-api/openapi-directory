import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAppRequestBody extends SpeakeasyBase {
    spec: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
}
export declare class CreateApp200ApplicationJson extends SpeakeasyBase {
    app?: shared.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems;
}
export declare class CreateApp401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateAppRequest extends SpeakeasyBase {
    request: CreateAppRequestBody;
}
export declare class CreateAppResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createApp200ApplicationJSONObject?: CreateApp200ApplicationJson;
    createApp401ApplicationJSONObject?: CreateApp401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
