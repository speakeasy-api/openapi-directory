/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class TeamsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-Appwrite-JWT",
  })
  jwt: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-Appwrite-Key",
  })
  key: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-Appwrite-Project",
  })
  project: string;
}

export class TeamsUpdateRequestBody extends SpeakeasyBase {
  /**
   * Team name. Max length: 128 chars.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}

export class TeamsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: TeamsUpdateRequestBody;

  /**
   * Team unique ID.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=teamId",
  })
  teamId: string;
}

export class TeamsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Team
   */
  @SpeakeasyMetadata()
  team?: shared.Team;
}
