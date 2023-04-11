import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateClusterXAmzTargetEnum {
    AWSIESnowballJobManagementServiceCreateCluster = "AWSIESnowballJobManagementService.CreateCluster"
}
export declare class CreateClusterRequest extends SpeakeasyBase {
    createClusterRequest: shared.CreateClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateClusterXAmzTargetEnum;
}
export declare class CreateClusterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createClusterResult?: shared.CreateClusterResult;
    /**
     * Ec2RequestFailedException
     */
    ec2RequestFailedException?: any;
    /**
     * InvalidInputCombinationException
     */
    invalidInputCombinationException?: any;
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
