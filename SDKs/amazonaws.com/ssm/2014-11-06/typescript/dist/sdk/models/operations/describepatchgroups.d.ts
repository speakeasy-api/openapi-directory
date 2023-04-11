import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePatchGroupsXAmzTargetEnum {
    AmazonSSMDescribePatchGroups = "AmazonSSM.DescribePatchGroups"
}
export declare class DescribePatchGroupsRequest extends SpeakeasyBase {
    describePatchGroupsRequest: shared.DescribePatchGroupsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePatchGroupsXAmzTargetEnum;
}
export declare class DescribePatchGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePatchGroupsResult?: shared.DescribePatchGroupsResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
