/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum GETDeleteCustomVerificationEmailTemplateActionEnum {
  DeleteCustomVerificationEmailTemplate = "DeleteCustomVerificationEmailTemplate",
}

export enum GETDeleteCustomVerificationEmailTemplateVersionEnum {
  TwoThousandAndTen1201 = "2010-12-01",
}

export class GETDeleteCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Action",
  })
  action: GETDeleteCustomVerificationEmailTemplateActionEnum;

  /**
   * The name of the custom verification email template that you want to delete.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=TemplateName",
  })
  templateName: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Version",
  })
  version: GETDeleteCustomVerificationEmailTemplateVersionEnum;

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

export class GETDeleteCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
