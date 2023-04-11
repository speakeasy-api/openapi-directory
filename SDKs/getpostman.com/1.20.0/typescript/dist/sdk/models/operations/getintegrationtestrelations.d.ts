import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetIntegrationTestRelationsRequest extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetIntegrationTestRelations200ApplicationJSONIntegrationtest extends SpeakeasyBase {
    collectionId?: string;
    id?: string;
    name?: string;
    updatedAt?: string;
}
/**
 * Get integration test relations
 */
export declare class GetIntegrationTestRelations200ApplicationJSON extends SpeakeasyBase {
    integrationtest?: GetIntegrationTestRelations200ApplicationJSONIntegrationtest[];
}
export declare class GetIntegrationTestRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get integration test relations
     */
    getIntegrationTestRelations200ApplicationJSONObject?: GetIntegrationTestRelations200ApplicationJSON;
}
