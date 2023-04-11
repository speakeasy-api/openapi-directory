import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListImportFailuresXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportFailures = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures"
}
export declare class ListImportFailuresRequest extends SpeakeasyBase {
    listImportFailuresRequest: shared.ListImportFailuresRequest;
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
    xAmzTarget: ListImportFailuresXAmzTargetEnum;
}
export declare class ListImportFailuresResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listImportFailuresResponse?: shared.ListImportFailuresResponse;
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
