import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVpcRequestBody extends SpeakeasyBase {
    description?: string;
    ipRange?: string;
    name: string;
    region: string;
}
export declare class CreateVpc201ApplicationJson extends SpeakeasyBase {
    vpc?: shared.Onev21vpcsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesVpcsItems;
}
export declare class CreateVpc401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateVpcRequest extends SpeakeasyBase {
    request: CreateVpcRequestBody;
}
export declare class CreateVpcResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createVpc201ApplicationJSONObject?: CreateVpc201ApplicationJson;
    createVpc401ApplicationJSONObject?: CreateVpc401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
