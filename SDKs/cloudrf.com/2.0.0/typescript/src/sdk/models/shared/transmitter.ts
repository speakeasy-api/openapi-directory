/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Transmitter extends SpeakeasyBase {
  /**
   * Altitude above ground level in metres OR feet
   */
  @SpeakeasyMetadata()
  @Expose({ name: "alt" })
  alt?: number;

  /**
   * Bandwidth in MHz. 1MHz has a noise floor of -114dBm. 10MHz = -104dBm, 20MHz = -101dBm
   */
  @SpeakeasyMetadata()
  @Expose({ name: "bwi" })
  bwi?: number;

  /**
   * Centre frequency in megahertz
   */
  @SpeakeasyMetadata()
  @Expose({ name: "frq" })
  frq?: number;

  /**
   * Latitude in decimal degrees
   */
  @SpeakeasyMetadata()
  @Expose({ name: "lat" })
  lat?: number;

  /**
   * Longitude in decimal degrees
   */
  @SpeakeasyMetadata()
  @Expose({ name: "lon" })
  lon?: number;

  /**
   * Transmitter power in watts before the antenna
   */
  @SpeakeasyMetadata()
  @Expose({ name: "txw" })
  txw?: number;
}
