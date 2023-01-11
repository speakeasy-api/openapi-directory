import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListAllKeysQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListAllKeys200ApplicationJsonLinksPages1 extends SpeakeasyBase {
    last?: string;
    next?: string;
}
export declare class ListAllKeys200ApplicationJsonLinksPages2 extends SpeakeasyBase {
    first?: string;
    prev?: string;
}
export declare class ListAllKeys200ApplicationJsonLinks extends SpeakeasyBase {
    pages?: any;
}
/**
 * Information about the response itself.
**/
export declare class ListAllKeys200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class ListAllKeys200ApplicationJsonSshKeys extends SpeakeasyBase {
    fingerprint?: string;
    id?: number;
    name: string;
    publicKey: string;
}
export declare class ListAllKeys200ApplicationJson extends SpeakeasyBase {
    links?: ListAllKeys200ApplicationJsonLinks;
    meta: ListAllKeys200ApplicationJsonMeta;
    sshKeys?: ListAllKeys200ApplicationJsonSshKeys[];
}
export declare class ListAllKeys401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class ListAllKeysRequest extends SpeakeasyBase {
    queryParams: ListAllKeysQueryParams;
}
export declare class ListAllKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    listAllKeys200ApplicationJSONObject?: ListAllKeys200ApplicationJson;
    listAllKeys401ApplicationJSONObject?: ListAllKeys401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
