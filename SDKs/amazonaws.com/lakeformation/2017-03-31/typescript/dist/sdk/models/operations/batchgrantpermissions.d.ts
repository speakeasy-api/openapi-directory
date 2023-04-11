import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGrantPermissionsRequestBody extends SpeakeasyBase {
    /**
     * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
     */
    catalogId?: string;
    /**
     * A list of up to 20 entries for resource permissions to be granted by batch operation to the principal.
     */
    entries: shared.BatchPermissionsRequestEntry[];
}
export declare class BatchGrantPermissionsRequest extends SpeakeasyBase {
    requestBody: BatchGrantPermissionsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGrantPermissionsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGrantPermissionsResponse?: shared.BatchGrantPermissionsResponse;
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
