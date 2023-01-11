import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVpcPathParams extends SpeakeasyBase {
    vpcId: string;
}
export declare class DeleteVpc401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteVpcRequest extends SpeakeasyBase {
    pathParams: DeleteVpcPathParams;
}
export declare class DeleteVpcResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteVpc401ApplicationJSONObject?: DeleteVpc401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
