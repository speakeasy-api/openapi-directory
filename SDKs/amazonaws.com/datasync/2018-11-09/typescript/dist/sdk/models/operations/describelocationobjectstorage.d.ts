import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeLocationObjectStorageXAmzTargetEnum {
    FmrsServiceDescribeLocationObjectStorage = "FmrsService.DescribeLocationObjectStorage"
}
export declare class DescribeLocationObjectStorageRequest extends SpeakeasyBase {
    describeLocationObjectStorageRequest: shared.DescribeLocationObjectStorageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeLocationObjectStorageXAmzTargetEnum;
}
export declare class DescribeLocationObjectStorageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeLocationObjectStorageResponse?: shared.DescribeLocationObjectStorageResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
