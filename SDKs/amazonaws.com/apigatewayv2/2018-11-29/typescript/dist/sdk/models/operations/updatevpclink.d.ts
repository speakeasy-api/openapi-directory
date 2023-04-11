import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateVpcLinkRequestBody extends SpeakeasyBase {
    /**
     * A string with a length between [1-128].
     */
    name?: string;
}
export declare class UpdateVpcLinkRequest extends SpeakeasyBase {
    requestBody: UpdateVpcLinkRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the VPC link.
     */
    vpcLinkId: string;
}
export declare class UpdateVpcLinkResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateVpcLinkResponse?: shared.UpdateVpcLinkResponse;
}
