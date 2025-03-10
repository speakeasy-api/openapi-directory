/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class UpdateTypedLinkFacetRequestBody extends SpeakeasyBase {
  /**
   * Attributes update structure.
   */
  @SpeakeasyMetadata({ elemType: shared.TypedLinkFacetAttributeUpdate })
  @Expose({ name: "AttributeUpdates" })
  @Type(() => shared.TypedLinkFacetAttributeUpdate)
  attributeUpdates: shared.TypedLinkFacetAttributeUpdate[];

  /**
   * The order of identity attributes for the facet, from most significant to least significant. The ability to filter typed links considers the order that the attributes are defined on the typed link facet. When providing ranges to a typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range. Filters are interpreted in the order of the attributes on the typed link facet, not the order in which they are supplied to any API calls. For more information about identity attributes, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "IdentityAttributeOrder" })
  identityAttributeOrder: string[];

  /**
   * The unique name of the typed link facet.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name: string;
}

export class UpdateTypedLinkFacetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: UpdateTypedLinkFacetRequestBody;

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

  /**
   * The Amazon Resource Name (ARN) that is associated with the schema. For more information, see <a>arns</a>.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-amz-data-partition",
  })
  xAmzDataPartition: string;
}

export class UpdateTypedLinkFacetResponse extends SpeakeasyBase {
  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * FacetNotFoundException
   */
  @SpeakeasyMetadata()
  facetNotFoundException?: shared.FacetNotFoundException;

  /**
   * FacetValidationException
   */
  @SpeakeasyMetadata()
  facetValidationException?: shared.FacetValidationException;

  /**
   * InternalServiceException
   */
  @SpeakeasyMetadata()
  internalServiceException?: shared.InternalServiceException;

  /**
   * InvalidArnException
   */
  @SpeakeasyMetadata()
  invalidArnException?: shared.InvalidArnException;

  /**
   * InvalidFacetUpdateException
   */
  @SpeakeasyMetadata()
  invalidFacetUpdateException?: shared.InvalidFacetUpdateException;

  /**
   * InvalidRuleException
   */
  @SpeakeasyMetadata()
  invalidRuleException?: shared.InvalidRuleException;

  /**
   * LimitExceededException
   */
  @SpeakeasyMetadata()
  limitExceededException?: shared.LimitExceededException;

  /**
   * RetryableConflictException
   */
  @SpeakeasyMetadata()
  retryableConflictException?: shared.RetryableConflictException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ResourceNotFoundException
   */
  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  updateTypedLinkFacetResponse?: Record<string, any>;

  /**
   * ValidationException
   */
  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
