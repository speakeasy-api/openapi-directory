import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopImportXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101StopImport = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport"
}
export declare class StopImportRequest extends SpeakeasyBase {
    stopImportRequest: shared.StopImportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopImportXAmzTargetEnum;
}
export declare class StopImportResponse extends SpeakeasyBase {
    contentType: string;
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
     * Success
     */
    stopImportResponse?: shared.StopImportResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
