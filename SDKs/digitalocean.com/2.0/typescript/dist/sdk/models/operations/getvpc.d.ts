import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVpcPathParams extends SpeakeasyBase {
    vpcId: string;
}
export declare class GetVpc200ApplicationJson extends SpeakeasyBase {
    vpc?: shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems;
}
export declare class GetVpc401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetVpcRequest extends SpeakeasyBase {
    pathParams: GetVpcPathParams;
}
export declare class GetVpcResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getVpc200ApplicationJSONObject?: GetVpc200ApplicationJson;
    getVpc401ApplicationJSONObject?: GetVpc401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
