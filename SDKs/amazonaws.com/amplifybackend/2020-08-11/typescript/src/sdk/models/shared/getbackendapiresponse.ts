import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetBackendApiResponseResourceConfigConflictResolution
/** 
 * The conflict resolution strategy for your data stored in the data models.
**/
export class GetBackendApiResponseResourceConfigConflictResolution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolutionStrategy" })
  resolutionStrategy?: Record<string, any>;
}


// GetBackendApiResponseResourceConfigDefaultAuthTypeSettings
/** 
 * Describes settings for the authentication mode.
**/
export class GetBackendApiResponseResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CognitoUserPoolId" })
  cognitoUserPoolId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ExpirationTime" })
  expirationTime?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=OpenIDAuthTTL" })
  openIDAuthTTL?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=OpenIDClientId" })
  openIDClientID?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=OpenIDIatTTL" })
  openIDIatTTL?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=OpenIDIssueURL" })
  openIDIssueURL?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=OpenIDProviderName" })
  openIDProviderName?: Record<string, any>;
}


// GetBackendApiResponseResourceConfigDefaultAuthType
/** 
 * The default authentication type for interacting with the configured data models in your Amplify project.
**/
export class GetBackendApiResponseResourceConfigDefaultAuthType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: GetBackendApiResponseResourceConfigDefaultAuthTypeSettings;
}


// GetBackendApiResponseResourceConfig
/** 
 * The resource configuration for this response object.
**/
export class GetBackendApiResponseResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalAuthTypes" })
  additionalAuthTypes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ApiName" })
  apiName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ConflictResolution" })
  conflictResolution?: GetBackendApiResponseResourceConfigConflictResolution;

  @SpeakeasyMetadata({ data: "json, name=DefaultAuthType" })
  defaultAuthType?: GetBackendApiResponseResourceConfigDefaultAuthType;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=TransformSchema" })
  transformSchema?: Record<string, any>;
}


export class GetBackendApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=BackendEnvironmentName" })
  backendEnvironmentName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ResourceConfig" })
  resourceConfig?: GetBackendApiResponseResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=ResourceName" })
  resourceName?: Record<string, any>;
}
