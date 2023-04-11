import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetJobManifestXAmzTargetEnum {
    AWSIESnowballJobManagementServiceGetJobManifest = "AWSIESnowballJobManagementService.GetJobManifest"
}
export declare class GetJobManifestRequest extends SpeakeasyBase {
    getJobManifestRequest: shared.GetJobManifestRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetJobManifestXAmzTargetEnum;
}
export declare class GetJobManifestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getJobManifestResult?: shared.GetJobManifestResult;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
