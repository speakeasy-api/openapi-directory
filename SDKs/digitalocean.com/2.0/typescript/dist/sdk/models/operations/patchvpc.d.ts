import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchVpcPathParams extends SpeakeasyBase {
    vpcId: string;
}
export declare class PatchVpcRequestBody extends SpeakeasyBase {
    default?: boolean;
    description?: string;
    name?: string;
}
export declare class PatchVpc200ApplicationJson extends SpeakeasyBase {
    vpc?: shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems;
}
export declare class PatchVpc401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PatchVpcRequest extends SpeakeasyBase {
    pathParams: PatchVpcPathParams;
    request: PatchVpcRequestBody;
}
export declare class PatchVpcResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    patchVpc200ApplicationJSONObject?: PatchVpc200ApplicationJson;
    patchVpc401ApplicationJSONObject?: PatchVpc401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
