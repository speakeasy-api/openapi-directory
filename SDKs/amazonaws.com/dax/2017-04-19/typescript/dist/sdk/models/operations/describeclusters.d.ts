import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeClustersXAmzTargetEnum {
    AmazonDaxv3DescribeClusters = "AmazonDAXV3.DescribeClusters"
}
export declare class DescribeClustersRequest extends SpeakeasyBase {
    describeClustersRequest: shared.DescribeClustersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeClustersXAmzTargetEnum;
}
export declare class DescribeClustersResponse extends SpeakeasyBase {
    /**
     * ClusterNotFoundFault
     */
    clusterNotFoundFault?: any;
    contentType: string;
    /**
     * Success
     */
    describeClustersResponse?: shared.DescribeClustersResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
}
