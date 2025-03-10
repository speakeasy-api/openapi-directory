/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostVolumesNameRequest extends SpeakeasyBase {
  /**
   * Input parameter that are required to provision an existing volume to a new space and to unprovision it from a space.
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateVolume: shared.UpdateVolume;

  /**
   * The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Auth-Project-Id",
  })
  xAuthProjectId: string;

  /**
   * The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Auth-Token",
  })
  xAuthToken: string;

  /**
   * The name of the volume that you want to share with another space in your organization.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=name",
  })
  name: string;
}

export class PostVolumesNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Ok. A list with detailed information about the volume is returned. Review the changes in the `otherSpaceVisibility` property.
   */
  @SpeakeasyMetadata()
  volume?: shared.Volume;
}
