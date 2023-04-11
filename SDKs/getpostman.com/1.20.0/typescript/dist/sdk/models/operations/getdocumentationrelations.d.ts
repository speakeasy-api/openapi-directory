import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDocumentationRelationsRequest extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetDocumentationRelations200ApplicationJSONDocumentation extends SpeakeasyBase {
    collectionId?: string;
    id?: string;
    name?: string;
    updatedAt?: string;
}
/**
 * Get documentation relations
 */
export declare class GetDocumentationRelations200ApplicationJSON extends SpeakeasyBase {
    documentation?: GetDocumentationRelations200ApplicationJSONDocumentation[];
}
export declare class GetDocumentationRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get documentation relations
     */
    getDocumentationRelations200ApplicationJSONObject?: GetDocumentationRelations200ApplicationJSON;
}
