/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum {
  Route53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccount = "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount",
}

export class AcceptDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  acceptDomainTransferFromAnotherAwsAccountRequest: shared.AcceptDomainTransferFromAnotherAwsAccountRequest;

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
  xAmzTarget: AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
}

export class AcceptDomainTransferFromAnotherAwsAccountResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  acceptDomainTransferFromAnotherAwsAccountResponse?: shared.AcceptDomainTransferFromAnotherAwsAccountResponse;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * DomainLimitExceeded
   */
  @SpeakeasyMetadata()
  domainLimitExceeded?: any;

  /**
   * InvalidInput
   */
  @SpeakeasyMetadata()
  invalidInput?: any;

  /**
   * OperationLimitExceeded
   */
  @SpeakeasyMetadata()
  operationLimitExceeded?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * UnsupportedTLD
   */
  @SpeakeasyMetadata()
  unsupportedTLD?: any;
}
