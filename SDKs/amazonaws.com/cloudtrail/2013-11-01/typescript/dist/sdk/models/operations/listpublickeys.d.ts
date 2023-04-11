import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPublicKeysXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101ListPublicKeys = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys"
}
export declare class ListPublicKeysRequest extends SpeakeasyBase {
    listPublicKeysRequest: shared.ListPublicKeysRequest;
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
    xAmzTarget: ListPublicKeysXAmzTargetEnum;
}
export declare class ListPublicKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidTimeRangeException
     */
    invalidTimeRangeException?: any;
    /**
     * InvalidTokenException
     */
    invalidTokenException?: any;
    /**
     * Success
     */
    listPublicKeysResponse?: shared.ListPublicKeysResponse;
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
