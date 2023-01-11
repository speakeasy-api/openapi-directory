import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignProjectResourcesPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class AssignProjectResourcesRequestBody extends SpeakeasyBase {
    resources?: string[];
}
export declare class AssignProjectResources200ApplicationJson extends SpeakeasyBase {
    resources?: shared.Onev21projects1Percent7BprojectIdPercent7D1resourcesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesResourcesItems[];
}
export declare class AssignProjectResources401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class AssignProjectResourcesRequest extends SpeakeasyBase {
    pathParams: AssignProjectResourcesPathParams;
    request: AssignProjectResourcesRequestBody;
}
export declare class AssignProjectResourcesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    assignProjectResources200ApplicationJSONObject?: AssignProjectResources200ApplicationJson;
    assignProjectResources401ApplicationJSONObject?: AssignProjectResources401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
