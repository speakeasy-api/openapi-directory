import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeClustersXAmzTargetEnum {
    BaldrApiServiceDescribeClusters = "BaldrApiService.DescribeClusters"
}
export declare class DescribeClustersRequest extends SpeakeasyBase {
    describeClustersRequest: shared.DescribeClustersRequest;
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
    xAmzTarget: DescribeClustersXAmzTargetEnum;
}
export declare class DescribeClustersResponse extends SpeakeasyBase {
    /**
     * CloudHsmAccessDeniedException
     */
    cloudHsmAccessDeniedException?: any;
    /**
     * CloudHsmInternalFailureException
     */
    cloudHsmInternalFailureException?: any;
    /**
     * CloudHsmInvalidRequestException
     */
    cloudHsmInvalidRequestException?: any;
    /**
     * CloudHsmServiceException
     */
    cloudHsmServiceException?: any;
    /**
     * CloudHsmTagException
     */
    cloudHsmTagException?: any;
    contentType: string;
    /**
     * Success
     */
    describeClustersResponse?: shared.DescribeClustersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
