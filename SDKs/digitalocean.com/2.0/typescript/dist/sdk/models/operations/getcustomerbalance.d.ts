import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomerBalance200ApplicationJson extends SpeakeasyBase {
    accountBalance?: string;
    generatedAt?: Date;
    monthToDateBalance?: string;
    monthToDateUsage?: string;
}
export declare class GetCustomerBalance401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetCustomerBalanceResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getCustomerBalance200ApplicationJSONObject?: GetCustomerBalance200ApplicationJson;
    getCustomerBalance401ApplicationJSONObject?: GetCustomerBalance401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
