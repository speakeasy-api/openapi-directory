import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutReplicationConfigurationXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutReplicationConfiguration = "AmazonEC2ContainerRegistry_V20150921.PutReplicationConfiguration"
}
export declare class PutReplicationConfigurationRequest extends SpeakeasyBase {
    putReplicationConfigurationRequest: shared.PutReplicationConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutReplicationConfigurationXAmzTargetEnum;
}
export declare class PutReplicationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    putReplicationConfigurationResponse?: shared.PutReplicationConfigurationResponse;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
