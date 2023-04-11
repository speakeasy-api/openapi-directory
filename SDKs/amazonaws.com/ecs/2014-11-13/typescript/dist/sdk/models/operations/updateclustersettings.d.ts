import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateClusterSettingsXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateClusterSettings = "AmazonEC2ContainerServiceV20141113.UpdateClusterSettings"
}
export declare class UpdateClusterSettingsRequest extends SpeakeasyBase {
    updateClusterSettingsRequest: shared.UpdateClusterSettingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateClusterSettingsXAmzTargetEnum;
}
export declare class UpdateClusterSettingsResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    /**
     * ClusterNotFoundException
     */
    clusterNotFoundException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * Success
     */
    updateClusterSettingsResponse?: shared.UpdateClusterSettingsResponse;
}
