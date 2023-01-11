import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDomainPathParams extends SpeakeasyBase {
    domainName: string;
}
export declare class DeleteDomain401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteDomainRequest extends SpeakeasyBase {
    pathParams: DeleteDomainPathParams;
}
export declare class DeleteDomainResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteDomain401ApplicationJSONObject?: DeleteDomain401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
