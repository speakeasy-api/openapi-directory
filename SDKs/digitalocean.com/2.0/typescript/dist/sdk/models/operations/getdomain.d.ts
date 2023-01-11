import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class GetDomain401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDomainRequest extends SpeakeasyBase {
    pathParams: GetDomainPathParams;
}
export declare class GetDomainResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDomain200ApplicationJSONAny?: any;
    getDomain401ApplicationJSONObject?: GetDomain401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
