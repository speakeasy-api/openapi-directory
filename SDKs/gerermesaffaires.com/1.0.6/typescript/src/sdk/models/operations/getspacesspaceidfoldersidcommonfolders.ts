/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetSpacesSpaceIdFoldersIdCommonFoldersRequest extends SpeakeasyBase {
  /**
   * keywords attached to the folder
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Keywords",
  })
  keywords?: string;

  /**
   * Name of the folder
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Name" })
  name?: string;

  /**
   * Id of the folder
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  /**
   * Id of the space
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=spaceId",
  })
  spaceId: string;
}

export class GetSpacesSpaceIdFoldersIdCommonFoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * A list of folders
   */
  @SpeakeasyMetadata({ elemType: shared.Folder })
  getSpacesSpaceIdFoldersIdCommonFolders200ApplicationJSONAllOfs?: shared.Folder[];
}
