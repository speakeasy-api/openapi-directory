import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTableRestoreStatusXAmzTargetEnum {
    RedshiftServerlessGetTableRestoreStatus = "RedshiftServerless.GetTableRestoreStatus"
}
export declare class GetTableRestoreStatusRequest extends SpeakeasyBase {
    getTableRestoreStatusRequest: shared.GetTableRestoreStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTableRestoreStatusXAmzTargetEnum;
}
export declare class GetTableRestoreStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTableRestoreStatusResponse?: shared.GetTableRestoreStatusResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
