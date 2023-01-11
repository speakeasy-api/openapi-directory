import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchUpdateDomainRecordPathParams extends SpeakeasyBase {
    domainName: string;
    domainRecordId: number;
}
export declare class PatchUpdateDomainRecord401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class PatchUpdateDomainRecordRequest extends SpeakeasyBase {
    pathParams: PatchUpdateDomainRecordPathParams;
    request?: shared.Onev21domains1Percent7BdomainNamePercent7D1recordsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainRecordsItemsInput;
}
export declare class PatchUpdateDomainRecordResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    patchUpdateDomainRecord200ApplicationJSONAny?: any;
    patchUpdateDomainRecord401ApplicationJSONObject?: PatchUpdateDomainRecord401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
