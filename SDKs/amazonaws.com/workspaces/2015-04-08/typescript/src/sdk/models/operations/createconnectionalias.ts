/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum CreateConnectionAliasXAmzTargetEnum {
  WorkspacesServiceCreateConnectionAlias = "WorkspacesService.CreateConnectionAlias",
}

export class CreateConnectionAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createConnectionAliasRequest: shared.CreateConnectionAliasRequest;

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

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Target",
  })
  xAmzTarget: CreateConnectionAliasXAmzTargetEnum;
}

export class CreateConnectionAliasResponse extends SpeakeasyBase {
  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  createConnectionAliasResult?: shared.CreateConnectionAliasResult;

  /**
   * InvalidParameterValuesException
   */
  @SpeakeasyMetadata()
  invalidParameterValuesException?: any;

  /**
   * InvalidResourceStateException
   */
  @SpeakeasyMetadata()
  invalidResourceStateException?: any;

  /**
   * OperationNotSupportedException
   */
  @SpeakeasyMetadata()
  operationNotSupportedException?: any;

  /**
   * ResourceAlreadyExistsException
   */
  @SpeakeasyMetadata()
  resourceAlreadyExistsException?: any;

  /**
   * ResourceLimitExceededException
   */
  @SpeakeasyMetadata()
  resourceLimitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
