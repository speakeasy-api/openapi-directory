import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAliasesXAmzTargetEnum {
    TrentServiceListAliases = "TrentService.ListAliases"
}
export declare class ListAliasesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    limit?: string;
    listAliasesRequest: shared.ListAliasesRequest;
    /**
     * Pagination token
     */
    marker?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAliasesXAmzTargetEnum;
}
export declare class ListAliasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidMarkerException
     */
    invalidMarkerException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * Success
     */
    listAliasesResponse?: shared.ListAliasesResponse;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
