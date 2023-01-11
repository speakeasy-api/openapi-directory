import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteBackendApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" })
  backendEnvironmentName: string;
}


export class DeleteBackendApiHeaders extends SpeakeasyBase {
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


// DeleteBackendApiRequestBodyResourceConfigConflictResolution
/** 
 * The conflict resolution strategy for your data stored in the data models.
**/
export class DeleteBackendApiRequestBodyResourceConfigConflictResolution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResolutionStrategy" })
  resolutionStrategy?: Record<string, any>;
}


// DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings
/** 
 * Describes settings for the authentication mode.
**/
export class DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
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


// DeleteBackendApiRequestBodyResourceConfigDefaultAuthType
/** 
 * The default authentication type for interacting with the configured data models in your Amplify project.
**/
export class DeleteBackendApiRequestBodyResourceConfigDefaultAuthType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
}


// DeleteBackendApiRequestBodyResourceConfig
/** 
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export class DeleteBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalAuthTypes" })
  additionalAuthTypes?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ApiName" })
  apiName?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ConflictResolution" })
  conflictResolution?: DeleteBackendApiRequestBodyResourceConfigConflictResolution;

  @SpeakeasyMetadata({ data: "json, name=DefaultAuthType" })
  defaultAuthType?: DeleteBackendApiRequestBodyResourceConfigDefaultAuthType;

  @SpeakeasyMetadata({ data: "json, name=Service" })
  service?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=TransformSchema" })
  transformSchema?: Record<string, any>;
}


export class DeleteBackendApiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceConfig" })
  resourceConfig?: DeleteBackendApiRequestBodyResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}


export class DeleteBackendApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteBackendApiPathParams;

  @SpeakeasyMetadata()
  headers: DeleteBackendApiHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: DeleteBackendApiRequestBody;
}


export class DeleteBackendApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteBackendAPIResponse?: shared.DeleteBackendApiResponse;

  @SpeakeasyMetadata()
  gatewayTimeoutException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
