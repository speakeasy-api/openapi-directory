import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeVirtualServiceRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the service mesh that the virtual service resides in.
     */
    meshName: string;
    /**
     * The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.
     */
    meshOwner?: string;
    /**
     * The name of the virtual service to describe.
     */
    virtualServiceName: string;
}
export declare class DescribeVirtualServiceResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    describeVirtualServiceOutput?: shared.DescribeVirtualServiceOutput;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
