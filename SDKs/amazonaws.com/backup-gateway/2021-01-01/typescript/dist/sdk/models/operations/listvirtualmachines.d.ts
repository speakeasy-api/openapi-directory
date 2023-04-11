import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListVirtualMachinesXAmzTargetEnum {
    BackupOnPremisesV20210101ListVirtualMachines = "BackupOnPremises_v20210101.ListVirtualMachines"
}
export declare class ListVirtualMachinesRequest extends SpeakeasyBase {
    listVirtualMachinesInput: shared.ListVirtualMachinesInput;
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
    xAmzTarget: ListVirtualMachinesXAmzTargetEnum;
}
export declare class ListVirtualMachinesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listVirtualMachinesOutput?: shared.ListVirtualMachinesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
