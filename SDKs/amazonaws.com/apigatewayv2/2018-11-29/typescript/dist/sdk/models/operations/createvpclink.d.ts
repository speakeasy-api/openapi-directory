import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateVpcLinkRequestBody extends SpeakeasyBase {
    /**
     * A string with a length between [1-128].
     */
    name: string;
    /**
     * A list of security group IDs for the VPC link.
     */
    securityGroupIds?: string[];
    /**
     * A list of subnet IDs to include in the VPC link.
     */
    subnetIds: string[];
    /**
     * Represents a collection of tags associated with the resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateVpcLinkRequest extends SpeakeasyBase {
    requestBody: CreateVpcLinkRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateVpcLinkResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createVpcLinkResponse?: shared.CreateVpcLinkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
