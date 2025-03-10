/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class UpdateContentRequestBody extends SpeakeasyBase {
  /**
   * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  metadata?: Record<string, string>;

  /**
   * The URI for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content. To remove an existing <code>overrideLinkOurUri</code>, exclude this argument and set <code>removeOverrideLinkOutUri</code> to true.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "overrideLinkOutUri" })
  overrideLinkOutUri?: string;

  /**
   * Unset the existing <code>overrideLinkOutUri</code> if it exists.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "removeOverrideLinkOutUri" })
  removeOverrideLinkOutUri?: boolean;

  /**
   * The <code>revisionId</code> of the content resource to update, taken from an earlier call to <code>GetContent</code>, <code>GetContentSummary</code>, <code>SearchContent</code>, or <code>ListContents</code>. If included, this argument acts as an optimistic lock to ensure content was not modified since it was last read. If it has been modified, this API throws a <code>PreconditionFailedException</code>.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "revisionId" })
  revisionId?: string;

  /**
   * The title of the content.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  /**
   * A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uploadId" })
  uploadId?: string;
}

export class UpdateContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: UpdateContentRequestBody;

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
   * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=contentId",
  })
  contentId: string;

  /**
   * The identifier of the knowledge base. Can be either the ID or the ARN
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=knowledgeBaseId",
  })
  knowledgeBaseId: string;
}

export class UpdateContentResponse extends SpeakeasyBase {
  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * PreconditionFailedException
   */
  @SpeakeasyMetadata()
  preconditionFailedException?: any;

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
   * Success
   */
  @SpeakeasyMetadata()
  updateContentResponse?: shared.UpdateContentResponse;

  /**
   * ValidationException
   */
  @SpeakeasyMetadata()
  validationException?: any;
}
