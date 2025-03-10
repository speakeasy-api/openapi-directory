/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class UnsubscribeFromDatasetRequest extends SpeakeasyBase {
  /**
   * The name of the dataset from which to unsubcribe.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=DatasetName",
  })
  datasetName: string;

  /**
   * The unique ID generated for this device by Cognito.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=DeviceId",
  })
  deviceId: string;

  /**
   * Unique ID for this identity.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=IdentityId",
  })
  identityId: string;

  /**
   * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. The ID of the pool to which this identity belongs.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=IdentityPoolId",
  })
  identityPoolId: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
  })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
  })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Credential",
  })
  xAmzCredential?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Date",
  })
  xAmzDate?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
  })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Signature",
  })
  xAmzSignature?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
  })
  xAmzSignedHeaders?: string;
}

export class UnsubscribeFromDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InternalErrorException
   */
  @SpeakeasyMetadata()
  internalErrorException?: any;

  /**
   * InvalidConfigurationException
   */
  @SpeakeasyMetadata()
  invalidConfigurationException?: any;

  /**
   * InvalidParameterException
   */
  @SpeakeasyMetadata()
  invalidParameterException?: any;

  /**
   * NotAuthorizedException
   */
  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  /**
   * ResourceNotFoundException
   */
  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * TooManyRequestsException
   */
  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  unsubscribeFromDatasetResponse?: Record<string, any>;
}
