import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBackendApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;
}


export class CreateBackendApiHeaders extends SpeakeasyBase {
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


// CreateBackendApiRequestBodyResourceConfigConflictResolution
/** 
 * The conflict resolution strategy for your data stored in the data models.
**/
export class CreateBackendApiRequestBodyResourceConfigConflictResolution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolutionStrategy" })
  resolutionStrategy?: Record<string, any>;
}


// CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings
/** 
 * Describes settings for the authentication mode.
**/
export class CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
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


// CreateBackendApiRequestBodyResourceConfigDefaultAuthType
/** 
 * The default authentication type for interacting with the configured data models in your Amplify project.
**/
export class CreateBackendApiRequestBodyResourceConfigDefaultAuthType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
}


// CreateBackendApiRequestBodyResourceConfig
/** 
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export class CreateBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalAuthTypes" })
  additionalAuthTypes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ApiName" })
  apiName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ConflictResolution" })
  conflictResolution?: CreateBackendApiRequestBodyResourceConfigConflictResolution;

  @SpeakeasyMetadata({ data: "json, name=DefaultAuthType" })
  defaultAuthType?: CreateBackendApiRequestBodyResourceConfigDefaultAuthType;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=TransformSchema" })
  transformSchema?: Record<string, any>;
}


export class CreateBackendApiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backendEnvironmentName" })
  backendEnvironmentName: string;

  @SpeakeasyMetadata({ data: "json, name=resourceConfig" })
  resourceConfig: CreateBackendApiRequestBodyResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class CreateBackendApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBackendApiPathParams;

  @SpeakeasyMetadata()
  headers: CreateBackendApiHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateBackendApiRequestBody;
}


export class CreateBackendApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createBackendAPIResponse?: shared.CreateBackendApiResponse;

  @SpeakeasyMetadata()
  gatewayTimeoutException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
