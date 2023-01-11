import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoiceCsvByUuidPathParams extends SpeakeasyBase {
    invoiceUuid: string;
}
export declare class GetInvoiceCsvByUuid401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetInvoiceCsvByUuidRequest extends SpeakeasyBase {
    pathParams: GetInvoiceCsvByUuidPathParams;
}
export declare class GetInvoiceCsvByUuidResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getInvoiceCsvByUuid200TextCsvString?: string;
    getInvoiceCsvByUuid401ApplicationJSONObject?: GetInvoiceCsvByUuid401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
