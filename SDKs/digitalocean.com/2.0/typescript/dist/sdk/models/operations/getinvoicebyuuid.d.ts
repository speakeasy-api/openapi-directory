import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoiceByUuidPathParams extends SpeakeasyBase {
    invoiceUuid: string;
}
export declare class GetInvoiceByUuid200ApplicationJsonInvoiceItems extends SpeakeasyBase {
    amount?: string;
    description?: string;
    duration?: string;
    durationUnit?: string;
    endTime?: string;
    groupDescription?: string;
    product?: string;
    projectName?: string;
    resourceId?: string;
    resourceUuid?: string;
    startTime?: string;
}
export declare class GetInvoiceByUuid200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class GetInvoiceByUuid200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class GetInvoiceByUuid200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class GetInvoiceByUuid200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class GetInvoiceByUuid200ApplicationJson extends SpeakeasyBase {
    invoiceItems?: GetInvoiceByUuid200ApplicationJsonInvoiceItems[];
    links?: GetInvoiceByUuid200ApplicationJsonLinks;
    meta: GetInvoiceByUuid200ApplicationJsonMeta;
}
export declare class GetInvoiceByUuid401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetInvoiceByUuidRequest extends SpeakeasyBase {
    pathParams: GetInvoiceByUuidPathParams;
}
export declare class GetInvoiceByUuidResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getInvoiceByUuid200ApplicationJSONObject?: GetInvoiceByUuid200ApplicationJson;
    getInvoiceByUuid401ApplicationJSONObject?: GetInvoiceByUuid401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
