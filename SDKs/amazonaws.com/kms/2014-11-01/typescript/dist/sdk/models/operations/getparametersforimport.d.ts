import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetParametersForImportXAmzTargetEnum {
    TrentServiceGetParametersForImport = "TrentService.GetParametersForImport"
}
export declare class GetParametersForImportRequest extends SpeakeasyBase {
    getParametersForImportRequest: shared.GetParametersForImportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetParametersForImportXAmzTargetEnum;
}
export declare class GetParametersForImportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * Success
     */
    getParametersForImportResponse?: shared.GetParametersForImportResponse;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
