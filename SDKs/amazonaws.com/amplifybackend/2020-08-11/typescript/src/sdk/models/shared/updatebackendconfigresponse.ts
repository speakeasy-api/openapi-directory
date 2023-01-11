import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateBackendConfigResponseLoginAuthConfig
/** 
 * Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.
**/
export class UpdateBackendConfigResponseLoginAuthConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsCognitoIdentityPoolId" })
  awsCognitoIdentityPoolId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AwsCognitoRegion" })
  awsCognitoRegion?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AwsUserPoolsId" })
  awsUserPoolsId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=AwsUserPoolsWebClientId" })
  awsUserPoolsWebClientId?: Record<string, any>;
}


export class UpdateBackendConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=BackendManagerAppId" })
  backendManagerAppId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=LoginAuthConfig" })
  loginAuthConfig?: UpdateBackendConfigResponseLoginAuthConfig;
}
