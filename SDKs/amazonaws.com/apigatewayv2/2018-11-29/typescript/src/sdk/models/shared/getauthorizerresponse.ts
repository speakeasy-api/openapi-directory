import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetAuthorizerResponseJwtConfiguration
/** 
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
export class GetAuthorizerResponseJwtConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Audience" })
  audience?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Issuer" })
  issuer?: Record<string, any>;
}


export class GetAuthorizerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizerCredentialsArn" })
  authorizerCredentialsArn?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerId" })
  authorizerId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerPayloadFormatVersion" })
  authorizerPayloadFormatVersion?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerResultTtlInSeconds" })
  authorizerResultTtlInSeconds?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerType" })
  authorizerType?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AuthorizerUri" })
  authorizerUri?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=EnableSimpleResponses" })
  enableSimpleResponses?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IdentitySource" })
  identitySource?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=IdentityValidationExpression" })
  identityValidationExpression?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=JwtConfiguration" })
  jwtConfiguration?: GetAuthorizerResponseJwtConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: Record<string, any>;
}
