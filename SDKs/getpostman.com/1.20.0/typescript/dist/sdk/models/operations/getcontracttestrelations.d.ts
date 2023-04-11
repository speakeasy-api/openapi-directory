import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetContractTestRelationsRequest extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetContractTestRelations200ApplicationJSONContracttest extends SpeakeasyBase {
    collectionId?: string;
    id?: string;
    name?: string;
    updatedAt?: string;
}
/**
 * Get contract test relations
 */
export declare class GetContractTestRelations200ApplicationJSON extends SpeakeasyBase {
    contracttest?: GetContractTestRelations200ApplicationJSONContracttest[];
}
export declare class GetContractTestRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get contract test relations
     */
    getContractTestRelations200ApplicationJSONObject?: GetContractTestRelations200ApplicationJSON;
}
