/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The input source of the namespace that is located on your Amazon Elastic Kubernetes Service cluster.
 */
export class DeleteAppInputSourceRequestBodyEksSourceClusterNamespace extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "eksClusterArn" })
  eksClusterArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "namespace" })
  namespace?: string;
}

/**
 *  The Terraform s3 state file you need to import.
 */
export class DeleteAppInputSourceRequestBodyTerraformSource extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "s3StateFileUrl" })
  s3StateFileUrl?: string;
}

export class DeleteAppInputSourceRequestBody extends SpeakeasyBase {
  /**
   * The Amazon Resource Name (ARN) of the AWS Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "appArn" })
  appArn: string;

  /**
   * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "clientToken" })
  clientToken?: string;

  /**
   * The input source of the namespace that is located on your Amazon Elastic Kubernetes Service cluster.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "eksSourceClusterNamespace" })
  @Type(() => DeleteAppInputSourceRequestBodyEksSourceClusterNamespace)
  eksSourceClusterNamespace?: DeleteAppInputSourceRequestBodyEksSourceClusterNamespace;

  /**
   * The Amazon Resource Name (ARN) of the imported resource you want to remove from the Resilience Hub application. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sourceArn" })
  sourceArn?: string;

  /**
   *  The Terraform s3 state file you need to import.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "terraformSource" })
  @Type(() => DeleteAppInputSourceRequestBodyTerraformSource)
  terraformSource?: DeleteAppInputSourceRequestBodyTerraformSource;
}

export class DeleteAppInputSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: DeleteAppInputSourceRequestBody;

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

export class DeleteAppInputSourceResponse extends SpeakeasyBase {
  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  /**
   * ConflictException
   */
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  deleteAppInputSourceResponse?: shared.DeleteAppInputSourceResponse;

  /**
   * InternalServerException
   */
  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ResourceNotFoundException
   */
  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  /**
   * ThrottlingException
   */
  @SpeakeasyMetadata()
  throttlingException?: any;

  /**
   * ValidationException
   */
  @SpeakeasyMetadata()
  validationException?: any;
}
