/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Car condition
 */
export enum PredictCarPriceCarTypeEnum {
  Used = "used",
  New = "new",
}

/**
 * Country for which car price will be predicted
 */
export enum PredictCarPriceCountryEnum {
  Us = "us",
  Ca = "ca",
}

/**
 * Drivetrain on the car
 */
export enum PredictCarPriceDrivetrainEnum {
  FourWD = "4WD",
  Awd = "AWD",
  Fwd = "FWD",
  Rwd = "RWD",
}

/**
 * Engine Block of the car
 */
export enum PredictCarPriceEngineBlockEnum {
  I = "I",
  V = "V",
  H = "H",
}

/**
 * Transmission on the car
 */
export enum PredictCarPriceTransmissionEnum {
  Manual = "Manual",
  Automatic = "Automatic",
}

export class PredictCarPriceRequest extends SpeakeasyBase {
  /**
   * The API Authentication Key. Mandatory with all API calls.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=api_key",
  })
  apiKey?: string;

  /**
   * Base exterior color of the car
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=base_exterior_color",
  })
  baseExteriorColor?: string;

  /**
   * Base interior color of the car
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=base_interior_color",
  })
  baseInteriorColor?: string;

  /**
   * Car condition
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=car_type",
  })
  carType: PredictCarPriceCarTypeEnum;

  /**
   * Boolean to indicate car is carfax one owner or not
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=carfax_1_owner",
  })
  carfax1Owner?: boolean;

  /**
   * Boolean to indicate car has clean title or not
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=carfax_clean_title",
  })
  carfaxCleanTitle?: boolean;

  /**
   * City mileage of the car
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=city_mpg",
  })
  cityMpg?: number;

  /**
   * Country for which car price will be predicted
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=country",
  })
  country?: PredictCarPriceCountryEnum;

  /**
   * Number of cylinders in the vehicle
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cylinders",
  })
  cylinders?: number;

  /**
   * Number of doors in the vehicle
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doors" })
  doors?: number;

  /**
   * Drivetrain on the car
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=drivetrain",
  })
  drivetrain?: PredictCarPriceDrivetrainEnum;

  /**
   * Engine Block of the car
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=engine_block",
  })
  engineBlock?: PredictCarPriceEngineBlockEnum;

  /**
   * Engine Size of the car
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=engine_size",
  })
  engineSize?: number;

  /**
   * Highway mileage
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=highway_mpg",
  })
  highwayMpg?: number;

  /**
   * Boolean to indicate car is certified or not
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=is_certified",
  })
  isCertified?: boolean;

  /**
   * Latitude component of the location
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=latitude",
  })
  latitude?: number;

  /**
   * Longitude component of the location
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=longitude",
  })
  longitude?: number;

  /**
   * Car's make
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  /**
   * miles vehicle has driven in total
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=miles" })
  miles?: number;

  /**
   * Car's model
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=model" })
  model?: string;

  /**
   * Transmission on the car
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=transmission",
  })
  transmission?: PredictCarPriceTransmissionEnum;

  /**
   * Car's trim
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trim" })
  trim?: string;

  /**
   * Predict price for a VIN
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin?: string;

  /**
   * Car manufacturing year
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;

  /**
   * Location zip
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zip" })
  zip?: string;
}

export class PredictCarPriceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Error
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  /**
   * Predicted price of the car along with it's specifications
   */
  @SpeakeasyMetadata()
  pricePrediction?: shared.PricePrediction;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
