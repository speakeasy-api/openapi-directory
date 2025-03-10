/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetSpacesIdCompanyEntitiesRequest extends SpeakeasyBase {
  /**
   * Legal name of the company entity
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=LegalName",
  })
  legalName?: string;

  /**
   * Name of the company entity
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Name" })
  name?: string;

  /**
   * registration number of the company entity
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=RegistrationNumber",
  })
  registrationNumber?: string;

  /**
   * Id of the space
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetSpacesIdCompanyEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * A list of company entities
   */
  @SpeakeasyMetadata({ elemType: shared.CompanyEntity })
  getSpacesIdCompanyEntities200ApplicationJSONAllOfs?: shared.CompanyEntity[];
}
