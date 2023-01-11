import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoicePdfByUuidPathParams extends SpeakeasyBase {
    invoiceUuid: string;
}
export declare class GetInvoicePdfByUuid401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetInvoicePdfByUuidRequest extends SpeakeasyBase {
    pathParams: GetInvoicePdfByUuidPathParams;
}
export declare class GetInvoicePdfByUuidResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getInvoicePdfByUuid200ApplicationPdfBinaryString?: Uint8Array;
    getInvoicePdfByUuid401ApplicationJSONObject?: GetInvoicePdfByUuid401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
