import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The schema format: SDL or JSON.
 */
export declare enum GetIntrospectionSchemaFormatEnum {
    Sdl = "SDL",
    Json = "JSON"
}
export declare class GetIntrospectionSchemaRequest extends SpeakeasyBase {
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
    /**
     * The schema format: SDL or JSON.
     */
    format: GetIntrospectionSchemaFormatEnum;
    /**
     * A flag that specifies whether the schema introspection should contain directives.
     */
    includeDirectives?: boolean;
}
export declare class GetIntrospectionSchemaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getIntrospectionSchemaResponse?: shared.GetIntrospectionSchemaResponse;
    /**
     * GraphQLSchemaException
     */
    graphQLSchemaException?: any;
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
