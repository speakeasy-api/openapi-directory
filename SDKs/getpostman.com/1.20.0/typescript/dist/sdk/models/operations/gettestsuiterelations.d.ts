import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTestSuiteRelationsRequest extends SpeakeasyBase {
    apiId: string;
    apiVersionId: string;
}
export declare class GetTestSuiteRelations200ApplicationJSONTestsuite extends SpeakeasyBase {
    collectionId?: string;
    id?: string;
    name?: string;
    updatedAt?: string;
}
/**
 * Get test suite relations
 */
export declare class GetTestSuiteRelations200ApplicationJSON extends SpeakeasyBase {
    testsuite?: GetTestSuiteRelations200ApplicationJSONTestsuite[];
}
export declare class GetTestSuiteRelationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get test suite relations
     */
    getTestSuiteRelations200ApplicationJSONObject?: GetTestSuiteRelations200ApplicationJSON;
}
