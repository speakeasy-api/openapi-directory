import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoryManifestPathParams extends SpeakeasyBase {
    manifestDigest: string;
    registryName: string;
    repositoryName: string;
}
export declare class DeleteRepositoryManifest401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteRepositoryManifestRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoryManifestPathParams;
}
export declare class DeleteRepositoryManifestResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteRepositoryManifest401ApplicationJSONObject?: DeleteRepositoryManifest401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
