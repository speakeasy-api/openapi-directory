import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTestsXAmzTargetEnum {
    DeviceFarm20150623ListTests = "DeviceFarm_20150623.ListTests"
}
export declare class ListTestsRequest extends SpeakeasyBase {
    listTestsRequest: shared.ListTestsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTestsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListTestsResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listTestsResult?: shared.ListTestsResult;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
