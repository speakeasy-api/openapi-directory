import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeClustersXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DescribeClusters = "AmazonEC2ContainerServiceV20141113.DescribeClusters"
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
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeClustersResponse?: shared.DescribeClustersResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
