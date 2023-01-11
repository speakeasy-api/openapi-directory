import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainRecordPathParams extends SpeakeasyBase {
    domainName: string;
    domainRecordId: number;
}
export declare class GetDomainRecord401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetDomainRecordRequest extends SpeakeasyBase {
    pathParams: GetDomainRecordPathParams;
}
export declare class GetDomainRecordResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDomainRecord200ApplicationJSONAny?: any;
    getDomainRecord401ApplicationJSONObject?: GetDomainRecord401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
