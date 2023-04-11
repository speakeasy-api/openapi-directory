import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETDescribeInstancesHealthActionEnum {
    DescribeInstancesHealth = "DescribeInstancesHealth"
}
export declare enum GETDescribeInstancesHealthVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDescribeInstancesHealthRequest extends SpeakeasyBase {
    action: GETDescribeInstancesHealthActionEnum;
    /**
     * Specifies the response elements you wish to receive. To retrieve all attributes, set to <code>All</code>. If no attribute names are specified, returns a list of instances.
     */
    attributeNames?: shared.InstancesHealthAttributeEnum[];
    /**
     * Specify the AWS Elastic Beanstalk environment by ID.
     */
    environmentId?: string;
    /**
     * Specify the AWS Elastic Beanstalk environment by name.
     */
    environmentName?: string;
    /**
     * Specify the pagination token returned by a previous call.
     */
    nextToken?: string;
    version: GETDescribeInstancesHealthVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeInstancesHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
