/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PatientVaccineRecordsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  drchronoOauth2: string;
}

export class PatientVaccineRecordsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cursor",
  })
  cursor?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cvx_code",
  })
  cvxCode?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=doctor",
  })
  doctor?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_size",
  })
  pageSize?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=patient",
  })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}

/**
 * Paginated Result
 */
export class PatientVaccineRecordsList200ApplicationJSON extends SpeakeasyBase {
  /**
   * result data
   */
  @SpeakeasyMetadata({ elemType: shared.PatientVaccineRecord })
  @Expose({ name: "data" })
  @Type(() => shared.PatientVaccineRecord)
  data?: shared.PatientVaccineRecord[];

  /**
   * Next Paginated page
   */
  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  /**
   * Previous paginated page
   */
  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;
}

export class PatientVaccineRecordsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  patientVaccineRecordsList200ApplicationJSONObject?: PatientVaccineRecordsList200ApplicationJSON;
}
