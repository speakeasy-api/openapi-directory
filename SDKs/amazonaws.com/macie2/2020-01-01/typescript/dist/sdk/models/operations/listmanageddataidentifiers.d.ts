import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListManagedDataIdentifiersRequestBody extends SpeakeasyBase {
    /**
     * The nextToken string that specifies which page of results to return in a paginated response.
     */
    nextToken?: string;
}
export declare class ListManagedDataIdentifiersRequest extends SpeakeasyBase {
    requestBody: ListManagedDataIdentifiersRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListManagedDataIdentifiersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listManagedDataIdentifiersResponse?: shared.ListManagedDataIdentifiersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
