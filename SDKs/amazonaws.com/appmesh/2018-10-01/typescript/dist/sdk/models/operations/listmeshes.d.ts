import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListMeshesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of mesh results returned by <code>ListMeshes</code> in paginated
     *
     * @remarks
     *          output. When this parameter is used, <code>ListMeshes</code> only returns
     *             <code>limit</code> results in a single page along with a <code>nextToken</code> response
     *          element. The remaining results of the initial request can be seen by sending another
     *             <code>ListMeshes</code> request with the returned <code>nextToken</code> value. This
     *          value can be between 1 and 100. If this parameter is not
     *          used, then <code>ListMeshes</code> returns up to 100 results and a
     *             <code>nextToken</code> value if applicable.
     */
    limit?: number;
    /**
     * <p>The <code>nextToken</code> value returned from a previous paginated
     *
     * @remarks
     *          <code>ListMeshes</code> request where <code>limit</code> was used and the
     *          results exceeded the value of that parameter. Pagination continues from the end of the
     *          previous results that returned the <code>nextToken</code> value.</p>
     *          <note>
     *             <p>This token should be treated as an opaque identifier that is only used to
     *                 retrieve the next items in a list and not for other programmatic purposes.</p>
     *         </note>
     */
    nextToken?: string;
}
export declare class ListMeshesResponse extends SpeakeasyBase {
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
    listMeshesOutput?: shared.ListMeshesOutput;
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
