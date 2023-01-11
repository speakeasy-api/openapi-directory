import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCancelDeploymentPathParams extends SpeakeasyBase {
    appId: string;
    deploymentId: string;
}
export declare class PostCancelDeployment401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PostCancelDeploymentRequest extends SpeakeasyBase {
    pathParams: PostCancelDeploymentPathParams;
}
export declare class PostCancelDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    postCancelDeployment401ApplicationJSONObject?: PostCancelDeployment401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
    onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema?: shared.Onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema;
}
