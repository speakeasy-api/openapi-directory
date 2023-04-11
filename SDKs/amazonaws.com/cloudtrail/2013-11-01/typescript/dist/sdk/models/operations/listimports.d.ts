import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListImportsXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListImports = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports"
}
export declare class ListImportsRequest extends SpeakeasyBase {
    listImportsRequest: shared.ListImportsRequest;
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
    xAmzTarget: ListImportsXAmzTargetEnum;
}
export declare class ListImportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EventDataStoreARNInvalidException
     */
    eventDataStoreARNInvalidException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    listImportsResponse?: shared.ListImportsResponse;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
