import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVpcPathParams extends SpeakeasyBase {
    vpcId: string;
}
export declare class UpdateVpcRequestBody extends SpeakeasyBase {
    default?: boolean;
    description?: string;
    name: string;
}
export declare class UpdateVpc200ApplicationJson extends SpeakeasyBase {
    vpc?: shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems;
}
export declare class UpdateVpc401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateVpcRequest extends SpeakeasyBase {
    pathParams: UpdateVpcPathParams;
    request: UpdateVpcRequestBody;
}
export declare class UpdateVpcResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateVpc200ApplicationJSONObject?: UpdateVpc200ApplicationJson;
    updateVpc401ApplicationJSONObject?: UpdateVpc401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
