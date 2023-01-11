import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoryTagPathParams extends SpeakeasyBase {
    registryName: string;
    repositoryName: string;
    repositoryTag: string;
}
export declare class DeleteRepositoryTag401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteRepositoryTagRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoryTagPathParams;
}
export declare class DeleteRepositoryTagResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteRepositoryTag401ApplicationJSONObject?: DeleteRepositoryTag401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
