import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DestroyWithAssociatedResourcesDangerousPathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare class DestroyWithAssociatedResourcesDangerousHeaders extends SpeakeasyBase {
    xDangerous: boolean;
}
export declare class DestroyWithAssociatedResourcesDangerous401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DestroyWithAssociatedResourcesDangerousRequest extends SpeakeasyBase {
    pathParams: DestroyWithAssociatedResourcesDangerousPathParams;
    headers: DestroyWithAssociatedResourcesDangerousHeaders;
}
export declare class DestroyWithAssociatedResourcesDangerousResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    destroyWithAssociatedResourcesDangerous401ApplicationJSONObject?: DestroyWithAssociatedResourcesDangerous401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
