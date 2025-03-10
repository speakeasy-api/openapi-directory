/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class SearchTypeBlsSeriesRequest extends SpeakeasyBase {
  /**
   * Archive change date from
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=changedate.from;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  changedateFrom?: Date;

  /**
   * Archive change date to
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=changedate.to;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  changedateTo?: Date;

  /**
   * Archive create date from
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=createdate.from;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  createdateFrom?: Date;

  /**
   * Archive create date to
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=createdate.to;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  createdateTo?: Date;

  /**
   * Search description
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=description",
  })
  description?: string;

  /**
   * File suffix
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=filesuffix",
  })
  filesuffix?: string;

  /**
   * From date
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=fromdate;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  fromdate?: Date;

  /**
   * Parent entry
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string;

  /**
   * Max number of results
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  /**
   * Northern bounds of search
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=maxlatitude",
  })
  maxlatitude?: number;

  /**
   * Eastern bounds of search
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=maxlongitude",
  })
  maxlongitude?: number;

  /**
   * Southern bounds of search
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=minlatitude",
  })
  minlatitude?: number;

  /**
   * Western bounds of search
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=minlongitude",
  })
  minlongitude?: number;

  /**
   * Search name
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  /**
   * Area
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.type_bls_series.area",
  })
  searchTypeBlsSeriesArea?: string;

  /**
   * Industry
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.type_bls_series.industry",
  })
  searchTypeBlsSeriesIndustry?: string;

  /**
   * Item
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.type_bls_series.item",
  })
  searchTypeBlsSeriesItem?: string;

  /**
   * Measure Data Type
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.type_bls_series.measure_data_type",
  })
  searchTypeBlsSeriesMeasureDataType?: string;

  /**
   * Seasonality
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.type_bls_series.seasonality",
  })
  searchTypeBlsSeriesSeasonality?: string;

  /**
   * Sector
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.type_bls_series.sector",
  })
  searchTypeBlsSeriesSector?: string;

  /**
   * Survey Name
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=search.type_bls_series.survey_name",
  })
  searchTypeBlsSeriesSurveyName?: string;

  /**
   * Number to skip
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  /**
   * Search text
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  /**
   * To date
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=todate;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  todate?: Date;
}

export class SearchTypeBlsSeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
