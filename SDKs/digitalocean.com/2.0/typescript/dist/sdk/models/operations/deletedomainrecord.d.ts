import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDomainRecordPathParams extends SpeakeasyBase {
    domainName: string;
    domainRecordId: number;
}
export declare class DeleteDomainRecord401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteDomainRecordRequest extends SpeakeasyBase {
    pathParams: DeleteDomainRecordPathParams;
}
export declare class DeleteDomainRecordResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteDomainRecord401ApplicationJSONObject?: DeleteDomainRecord401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
