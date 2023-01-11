import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDropletRequestBodySingleDropletRequest extends SpeakeasyBase {
    backups?: boolean;
    image: any;
    ipv6?: boolean;
    monitoring?: boolean;
    name: string;
    privateNetworking?: boolean;
    region: string;
    size: string;
    sshKeys?: any[];
    tags?: string[];
    userData?: string;
    vpcUuid?: string;
    withDropletAgent?: boolean;
}
export declare class CreateDropletRequestBodyMultipleDropletRequest extends SpeakeasyBase {
    backups?: boolean;
    image: any;
    ipv6?: boolean;
    monitoring?: boolean;
    names: string[];
    privateNetworking?: boolean;
    region: string;
    size: string;
    sshKeys?: any[];
    tags?: string[];
    userData?: string;
    vpcUuid?: string;
    withDropletAgent?: boolean;
}
export declare class CreateDroplet401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class CreateDropletRequest extends SpeakeasyBase {
    request?: any;
}
export declare class CreateDropletResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    createDroplet202ApplicationJSONOneOf?: any;
    createDroplet401ApplicationJSONObject?: CreateDroplet401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
