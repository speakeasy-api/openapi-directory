import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type format: SDL or JSON.
 */
export declare enum CreateTypeRequestBodyFormatEnum {
    Sdl = "SDL",
    Json = "JSON"
}
export declare class CreateTypeRequestBody extends SpeakeasyBase {
    /**
     * <p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p> <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL documentation</a>.</p>
     */
    definition: string;
    /**
     * The type format: SDL or JSON.
     */
    format: CreateTypeRequestBodyFormatEnum;
}
export declare class CreateTypeRequest extends SpeakeasyBase {
    requestBody: CreateTypeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API ID.
     */
    apiId: string;
}
export declare class CreateTypeResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createTypeResponse?: shared.CreateTypeResponse;
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
