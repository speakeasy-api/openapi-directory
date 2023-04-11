import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListVirtualNodesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of mesh results returned by <code>ListVirtualNodes</code> in
     *
     * @remarks
     *          paginated output. When this parameter is used, <code>ListVirtualNodes</code> only returns
     *          <code>limit</code> results in a single page along with a <code>nextToken</code>
     *          response element. The remaining results of the initial request can be seen by sending
     *          another <code>ListVirtualNodes</code> request with the returned <code>nextToken</code>
     *          value. This value can be between 1 and 100. If this
     *          parameter is not used, then <code>ListVirtualNodes</code> returns up to
     *          100 results and a <code>nextToken</code> value if applicable.
     */
    limit?: number;
    /**
     * The name of the service mesh in which to list virtual nodes.
     */
    meshName: string;
    /**
     * The <code>nextToken</code> value returned from a previous paginated
     *
     * @remarks
     *          <code>ListVirtualNodes</code> request where <code>limit</code> was used and the
     *          results exceeded the value of that parameter. Pagination continues from the end of the
     *          previous results that returned the <code>nextToken</code> value.
     */
    nextToken?: string;
}
export declare class ListVirtualNodesResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * Success
     */
    listVirtualNodesOutput?: shared.ListVirtualNodesOutput;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
