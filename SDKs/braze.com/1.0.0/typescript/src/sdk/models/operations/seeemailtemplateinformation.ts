/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class SeeEmailTemplateInformationRequest extends SpeakeasyBase {
  /**
   * (Required) String
   *
   * @remarks
   *
   * Your email template's API Identifier.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=email_template_id",
  })
  emailTemplateId?: string;
}

export class SeeEmailTemplateInformationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
