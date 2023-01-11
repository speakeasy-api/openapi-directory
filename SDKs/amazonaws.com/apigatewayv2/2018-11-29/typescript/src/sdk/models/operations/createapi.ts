import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateApiHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateApiRequestBodyCorsConfiguration
/** 
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
export class CreateApiRequestBodyCorsConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowCredentials" })
  allowCredentials?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AllowHeaders" })
  allowHeaders?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AllowMethods" })
  allowMethods?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AllowOrigins" })
  allowOrigins?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ExposeHeaders" })
  exposeHeaders?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=MaxAge" })
  maxAge?: Record<string, any>;
}

export enum CreateApiRequestBodyProtocolTypeEnum {
    Websocket = "WEBSOCKET",
    Http = "HTTP"
}


export class CreateApiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKeySelectionExpression" })
  apiKeySelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=corsConfiguration" })
  corsConfiguration?: CreateApiRequestBodyCorsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=credentialsArn" })
  credentialsArn?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disableExecuteApiEndpoint" })
  disableExecuteApiEndpoint?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableSchemaValidation" })
  disableSchemaValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=protocolType" })
  protocolType: CreateApiRequestBodyProtocolTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=routeKey" })
  routeKey?: string;

  @SpeakeasyMetadata({ data: "json, name=routeSelectionExpression" })
  routeSelectionExpression?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class CreateApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateApiHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateApiRequestBody;
}


export class CreateApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createApiResponse?: shared.CreateApiResponse;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
