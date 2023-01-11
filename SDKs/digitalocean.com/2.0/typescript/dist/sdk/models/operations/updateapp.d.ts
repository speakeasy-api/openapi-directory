import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAppPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateAppRequestBody extends SpeakeasyBase {
    spec: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec;
}
export declare class UpdateApp401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateAppRequest extends SpeakeasyBase {
    pathParams: UpdateAppPathParams;
    request: UpdateAppRequestBody;
}
export declare class UpdateAppResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateApp401ApplicationJSONObject?: UpdateApp401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
    onev21appsPostResponses200ContentApplication1jsonSchema?: shared.Onev21appsPostResponses200ContentApplication1jsonSchema;
}
