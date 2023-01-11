import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDeploymentPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class CreateDeploymentRequestBody extends SpeakeasyBase {
    forceBuild?: boolean;
}
export declare class CreateDeployment200ApplicationJson extends SpeakeasyBase {
    deployment?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems;
}
export declare class CreateDeployment401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    pathParams: CreateDeploymentPathParams;
    request: CreateDeploymentRequestBody;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createDeployment200ApplicationJSONObject?: CreateDeployment200ApplicationJson;
    createDeployment401ApplicationJSONObject?: CreateDeployment401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
