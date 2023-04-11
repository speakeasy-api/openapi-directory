import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGraphqlApiRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API ID for the GraphQL API.
     */
    apiId: string;
}
export declare class GetGraphqlApiResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getGraphqlApiResponse?: shared.GetGraphqlApiResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
