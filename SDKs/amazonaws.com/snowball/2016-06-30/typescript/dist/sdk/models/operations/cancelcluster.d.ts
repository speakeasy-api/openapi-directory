import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelClusterXAmzTargetEnum {
    AWSIESnowballJobManagementServiceCancelCluster = "AWSIESnowballJobManagementService.CancelCluster"
}
export declare class CancelClusterRequest extends SpeakeasyBase {
    cancelClusterRequest: shared.CancelClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelClusterXAmzTargetEnum;
}
export declare class CancelClusterResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelClusterResult?: Record<string, any>;
    contentType: string;
    /**
     * InvalidJobStateException
     */
    invalidJobStateException?: any;
    /**
     * InvalidResourceException
     */
    invalidResourceException?: any;
    /**
     * KMSRequestFailedException
     */
    kmsRequestFailedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
