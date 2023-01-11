import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetIntegrationResultTlsConfig
/** 
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
**/
export class GetIntegrationResultTlsConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerNameToVerify" })
  serverNameToVerify?: Record<string, any>;
}


export class GetIntegrationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApiGatewayManaged" })
  apiGatewayManaged?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ConnectionId" })
  connectionId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ConnectionType" })
  connectionType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ContentHandlingStrategy" })
  contentHandlingStrategy?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=CredentialsArn" })
  credentialsArn?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IntegrationId" })
  integrationId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IntegrationMethod" })
  integrationMethod?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IntegrationResponseSelectionExpression" })
  integrationResponseSelectionExpression?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IntegrationSubtype" })
  integrationSubtype?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IntegrationType" })
  integrationType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IntegrationUri" })
  integrationUri?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=PassthroughBehavior" })
  passthroughBehavior?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=PayloadFormatVersion" })
  payloadFormatVersion?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=RequestParameters" })
  requestParameters?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RequestTemplates" })
  requestTemplates?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ResponseParameters" })
  responseParameters?: Record<string, Record<string, string>>;

  @SpeakeasyMetadata({ data: "json, name=TemplateSelectionExpression" })
  templateSelectionExpression?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=TimeoutInMillis" })
  timeoutInMillis?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=TlsConfig" })
  tlsConfig?: GetIntegrationResultTlsConfig;
}
