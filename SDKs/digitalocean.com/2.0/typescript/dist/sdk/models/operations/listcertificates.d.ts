import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCertificatesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare enum ListCertificates200ApplicationJsonCertificatesStateEnum {
    Pending = "pending",
    Verified = "verified",
    Error = "error"
}
export declare enum ListCertificates200ApplicationJsonCertificatesTypeEnum {
    Custom = "custom",
    LetsEncrypt = "lets_encrypt"
}
export declare class ListCertificates200ApplicationJsonCertificates extends SpeakeasyBase {
    createdAt?: Date;
    dnsNames?: string[];
    id?: string;
    name?: string;
    notAfter?: Date;
    sha1Fingerprint?: string;
    state?: ListCertificates200ApplicationJsonCertificatesStateEnum;
    type?: ListCertificates200ApplicationJsonCertificatesTypeEnum;
}
export declare class ListCertificates200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListCertificates200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListCertificates200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListCertificates200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListCertificates200ApplicationJson extends SpeakeasyBase {
    certificates?: ListCertificates200ApplicationJsonCertificates[];
    links?: ListCertificates200ApplicationJsonLinks;
    meta: ListCertificates200ApplicationJsonMeta;
}
export declare class ListCertificates401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListCertificatesRequest extends SpeakeasyBase {
    queryParams: ListCertificatesQueryParams;
}
export declare class ListCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listCertificates200ApplicationJSONObject?: ListCertificates200ApplicationJson;
    listCertificates401ApplicationJSONObject?: ListCertificates401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
