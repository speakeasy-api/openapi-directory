import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetImportXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetImport = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport"
}
export declare class GetImportRequest extends SpeakeasyBase {
    getImportRequest: shared.GetImportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetImportXAmzTargetEnum;
}
export declare class GetImportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getImportResponse?: shared.GetImportResponse;
    /**
     * ImportNotFoundException
     */
    importNotFoundException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
