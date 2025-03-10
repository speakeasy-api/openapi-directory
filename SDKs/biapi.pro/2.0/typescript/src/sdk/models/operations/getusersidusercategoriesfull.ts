/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetUsersIdUserCategoriesFullRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=expand",
  })
  expand?: string;

  /**
   * Hint: you can use 'me' or 'all'
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=id_user",
  })
  idUser: string;
}

/**
 * categorys
 */
export class GetUsersIdUserCategoriesFull200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Category })
  @Expose({ name: "categorys" })
  @Type(() => shared.Category)
  categorys: shared.Category[];

  /**
   * total number of results
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}

export class GetUsersIdUserCategoriesFullResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * categorys
   */
  @SpeakeasyMetadata()
  getUsersIdUserCategoriesFull200ApplicationJSONObject?: GetUsersIdUserCategoriesFull200ApplicationJSON;
}
