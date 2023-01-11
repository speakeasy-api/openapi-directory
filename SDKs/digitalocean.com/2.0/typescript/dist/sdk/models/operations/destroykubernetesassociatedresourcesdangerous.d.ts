import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DestroyKubernetesAssociatedResourcesDangerousPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class DestroyKubernetesAssociatedResourcesDangerous401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DestroyKubernetesAssociatedResourcesDangerousRequest extends SpeakeasyBase {
    pathParams: DestroyKubernetesAssociatedResourcesDangerousPathParams;
}
export declare class DestroyKubernetesAssociatedResourcesDangerousResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    destroyKubernetesAssociatedResourcesDangerous401ApplicationJSONObject?: DestroyKubernetesAssociatedResourcesDangerous401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
