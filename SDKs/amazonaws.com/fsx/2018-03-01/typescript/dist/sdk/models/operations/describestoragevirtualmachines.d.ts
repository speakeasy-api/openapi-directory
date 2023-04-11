import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStorageVirtualMachinesXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DescribeStorageVirtualMachines = "AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines"
}
export declare class DescribeStorageVirtualMachinesRequest extends SpeakeasyBase {
    describeStorageVirtualMachinesRequest: shared.DescribeStorageVirtualMachinesRequest;
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
    xAmzTarget: DescribeStorageVirtualMachinesXAmzTargetEnum;
}
export declare class DescribeStorageVirtualMachinesResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    describeStorageVirtualMachinesResponse?: shared.DescribeStorageVirtualMachinesResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * StorageVirtualMachineNotFound
     */
    storageVirtualMachineNotFound?: any;
}
