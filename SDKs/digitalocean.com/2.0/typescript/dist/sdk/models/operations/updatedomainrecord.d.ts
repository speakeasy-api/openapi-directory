import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDomainRecordPathParams extends SpeakeasyBase {
    domainName: string;
    domainRecordId: number;
}
export declare class UpdateDomainRecord401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateDomainRecordRequest extends SpeakeasyBase {
    pathParams: UpdateDomainRecordPathParams;
    request?: shared.Onev21domains1Percent7BdomainNamePercent7D1recordsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainRecordsItemsInput;
}
export declare class UpdateDomainRecordResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateDomainRecord200ApplicationJSONAny?: any;
    updateDomainRecord401ApplicationJSONObject?: UpdateDomainRecord401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
