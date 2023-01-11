import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateApiResponseCorsConfiguration
/** 
 * A CORS configuration. Supported only for HTTP APIs.
**/
export class UpdateApiResponseCorsConfiguration extends SpeakeasyBase {
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


export class UpdateApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiEndpoint" })
  apiEndpoint?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ApiId" })
  apiId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ApiKeySelectionExpression" })
  apiKeySelectionExpression?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=CorsConfiguration" })
  corsConfiguration?: UpdateApiResponseCorsConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DisableExecuteApiEndpoint" })
  disableExecuteApiEndpoint?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=DisableSchemaValidation" })
  disableSchemaValidation?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ImportInfo" })
  importInfo?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ProtocolType" })
  protocolType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RouteSelectionExpression" })
  routeSelectionExpression?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Warnings" })
  warnings?: Record<string, any>;
}
