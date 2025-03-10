/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum EvaluatePullRequestApprovalRulesXAmzTargetEnum {
  CodeCommit20150413EvaluatePullRequestApprovalRules = "CodeCommit_20150413.EvaluatePullRequestApprovalRules",
}

export class EvaluatePullRequestApprovalRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  evaluatePullRequestApprovalRulesInput: shared.EvaluatePullRequestApprovalRulesInput;

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
  xAmzTarget: EvaluatePullRequestApprovalRulesXAmzTargetEnum;
}

export class EvaluatePullRequestApprovalRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * EncryptionIntegrityChecksFailedException
   */
  @SpeakeasyMetadata()
  encryptionIntegrityChecksFailedException?: any;

  /**
   * EncryptionKeyAccessDeniedException
   */
  @SpeakeasyMetadata()
  encryptionKeyAccessDeniedException?: any;

  /**
   * EncryptionKeyDisabledException
   */
  @SpeakeasyMetadata()
  encryptionKeyDisabledException?: any;

  /**
   * EncryptionKeyNotFoundException
   */
  @SpeakeasyMetadata()
  encryptionKeyNotFoundException?: any;

  /**
   * EncryptionKeyUnavailableException
   */
  @SpeakeasyMetadata()
  encryptionKeyUnavailableException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  evaluatePullRequestApprovalRulesOutput?: shared.EvaluatePullRequestApprovalRulesOutput;

  /**
   * InvalidPullRequestIdException
   */
  @SpeakeasyMetadata()
  invalidPullRequestIdException?: any;

  /**
   * InvalidRevisionIdException
   */
  @SpeakeasyMetadata()
  invalidRevisionIdException?: any;

  /**
   * PullRequestDoesNotExistException
   */
  @SpeakeasyMetadata()
  pullRequestDoesNotExistException?: any;

  /**
   * PullRequestIdRequiredException
   */
  @SpeakeasyMetadata()
  pullRequestIdRequiredException?: any;

  /**
   * RevisionIdRequiredException
   */
  @SpeakeasyMetadata()
  revisionIdRequiredException?: any;

  /**
   * RevisionNotCurrentException
   */
  @SpeakeasyMetadata()
  revisionNotCurrentException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
