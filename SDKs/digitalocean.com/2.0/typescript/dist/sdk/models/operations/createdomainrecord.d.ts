import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDomainRecordPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class CreateDomainRecordRequestBody1Input extends SpeakeasyBase {
    data: string;
    flags?: number;
    name: string;
    port?: number;
    priority?: number;
    tag?: string;
    ttl?: number;
    type: string;
    weight?: number;
}
export declare class CreateDomainRecordRequestBody2Input extends SpeakeasyBase {
    data: string;
    flags?: number;
    name: string;
    port?: number;
    priority?: number;
    tag?: string;
    ttl?: number;
    type: string;
    weight?: number;
}
export declare class CreateDomainRecordRequestBody3Input extends SpeakeasyBase {
    data: string;
    flags: number;
    name: string;
    port?: number;
    priority?: number;
    tag: string;
    ttl?: number;
    type: string;
    weight?: number;
}
export declare class CreateDomainRecordRequestBody4Input extends SpeakeasyBase {
    data: string;
    flags?: number;
    name: string;
    port?: number;
    priority?: number;
    tag?: string;
    ttl?: number;
    type: string;
    weight?: number;
}
export declare class CreateDomainRecordRequestBody5Input extends SpeakeasyBase {
    data: string;
    flags?: number;
    name?: string;
    port?: number;
    priority: number;
    tag?: string;
    ttl?: number;
    type: string;
    weight?: number;
}
export declare class CreateDomainRecordRequestBody6Input extends SpeakeasyBase {
    data: string;
    flags: number;
    name: string;
    port?: number;
    priority?: number;
    tag: string;
    ttl?: number;
    type: string;
    weight?: number;
}
export declare class CreateDomainRecordRequestBody7Input extends SpeakeasyBase {
    data?: string;
    flags?: number;
    name?: string;
    port?: number;
    priority?: number;
    tag?: string;
    ttl: number;
    type: string;
    weight?: number;
}
export declare class CreateDomainRecordRequestBody8Input extends SpeakeasyBase {
    data: string;
    flags: number;
    name: string;
    port: number;
    priority: number;
    tag: string;
    ttl?: number;
    type: string;
    weight?: number;
}
export declare class CreateDomainRecordRequestBody9Input extends SpeakeasyBase {
    data: string;
    flags: number;
    name: string;
    port?: number;
    priority?: number;
    tag: string;
    ttl?: number;
    type: string;
    weight?: number;
}
export declare class CreateDomainRecord401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateDomainRecordRequest extends SpeakeasyBase {
    pathParams: CreateDomainRecordPathParams;
    request?: any;
}
export declare class CreateDomainRecordResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createDomainRecord201ApplicationJSONAny?: any;
    createDomainRecord401ApplicationJSONObject?: CreateDomainRecord401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
