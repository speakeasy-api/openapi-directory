import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExportApiRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * The version of the API Gateway export algorithm. API Gateway uses the latest version by default. Currently, the only supported version is 1.0.
     */
    exportVersion?: string;
    /**
     * Specifies whether to include <a href="https://docs.aws.amazon.com//apigateway/latest/developerguide/api-gateway-swagger-extensions.html">API Gateway extensions</a> in the exported API definition. API Gateway extensions are included by default.
     */
    includeExtensions?: boolean;
    /**
     * The output type of the exported definition file. Valid values are JSON and YAML.
     */
    outputType: string;
    /**
     * The version of the API specification to use. OAS30, for OpenAPI 3.0, is the only supported value.
     */
    specification: string;
    /**
     * The name of the API stage to export. If you don't specify this property, a representation of the latest API configuration is exported.
     */
    stageName?: string;
}
export declare class ExportApiResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    exportApiResponse?: shared.ExportApiResponse;
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
}
