import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateClusterXAmzTargetEnum {
    AWSIESnowballJobManagementServiceUpdateCluster = "AWSIESnowballJobManagementService.UpdateCluster"
}
export declare class UpdateClusterRequest extends SpeakeasyBase {
    updateClusterRequest: shared.UpdateClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateClusterXAmzTargetEnum;
}
export declare class UpdateClusterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Ec2RequestFailedException
     */
    ec2RequestFailedException?: any;
    /**
     * InvalidInputCombinationException
     */
    invalidInputCombinationException?: any;
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
    /**
     * Success
     */
    updateClusterResult?: Record<string, any>;
}
