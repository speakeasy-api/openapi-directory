/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class CopyPadUsingPOSTRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=destinationID",
  })
  destinationID?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=sourceID",
  })
  sourceID?: string;
}

/**
 * internal api error (code 2)
 */
export class CopyPadUsingPost500ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

/**
 * no or wrong API key (code 4)
 */
export class CopyPadUsingPost401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

/**
 * generic api error (code 1)
 */
export class CopyPadUsingPost400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

/**
 * ok (code 0)
 */
export class CopyPadUsingPost200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  data?: Record<string, any>;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class CopyPadUsingPOSTResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ok (code 0)
   */
  @SpeakeasyMetadata()
  copyPadUsingPOST200ApplicationJSONObject?: CopyPadUsingPost200ApplicationJSON;

  /**
   * generic api error (code 1)
   */
  @SpeakeasyMetadata()
  copyPadUsingPOST400ApplicationJSONObject?: CopyPadUsingPost400ApplicationJSON;

  /**
   * no or wrong API key (code 4)
   */
  @SpeakeasyMetadata()
  copyPadUsingPOST401ApplicationJSONObject?: CopyPadUsingPost401ApplicationJSON;

  /**
   * internal api error (code 2)
   */
  @SpeakeasyMetadata()
  copyPadUsingPOST500ApplicationJSONObject?: CopyPadUsingPost500ApplicationJSON;
}
