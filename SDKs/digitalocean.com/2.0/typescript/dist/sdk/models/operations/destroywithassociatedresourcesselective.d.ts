import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DestroyWithAssociatedResourcesSelectivePathParams extends SpeakeasyBase {
    dropletId: number;
}
export declare class DestroyWithAssociatedResourcesSelective401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DestroyWithAssociatedResourcesSelectiveRequest extends SpeakeasyBase {
    pathParams: DestroyWithAssociatedResourcesSelectivePathParams;
}
export declare class DestroyWithAssociatedResourcesSelectiveResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    destroyWithAssociatedResourcesSelective401ApplicationJSONObject?: DestroyWithAssociatedResourcesSelective401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
