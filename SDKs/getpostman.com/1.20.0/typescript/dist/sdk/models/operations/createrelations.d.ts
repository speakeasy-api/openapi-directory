import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateRelationsRequestBody extends SpeakeasyBase {
    contracttest?: string[];
    documentation?: string[];
    mock?: string[];
    testsuite?: string[];
}
export declare class CreateRelationsRequest extends SpeakeasyBase {
    requestBody?: CreateRelationsRequestBody;
    apiId: string;
    apiVersionId: string;
}
/**
 * Create multiple relations from existing collections
 */
export declare class CreateRelations200ApplicationJSON extends SpeakeasyBase {
    contracttest?: string[];
    documentation?: string[];
    testsuite?: string[];
}
export declare class CreateRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create multiple relations from existing collections
     */
    createRelations200ApplicationJSONObject?: CreateRelations200ApplicationJSON;
}
