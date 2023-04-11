import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchDeleteImportDataXAmzTargetEnum {
    AWSPoseidonServiceV20151101BatchDeleteImportData = "AWSPoseidonService_V2015_11_01.BatchDeleteImportData"
}
export declare class BatchDeleteImportDataRequest extends SpeakeasyBase {
    batchDeleteImportDataRequest: shared.BatchDeleteImportDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchDeleteImportDataXAmzTargetEnum;
}
export declare class BatchDeleteImportDataResponse extends SpeakeasyBase {
    /**
     * AuthorizationErrorException
     */
    authorizationErrorException?: any;
    /**
     * Success
     */
    batchDeleteImportDataResponse?: shared.BatchDeleteImportDataResponse;
    contentType: string;
    /**
     * HomeRegionNotSetException
     */
    homeRegionNotSetException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ServerInternalErrorException
     */
    serverInternalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
