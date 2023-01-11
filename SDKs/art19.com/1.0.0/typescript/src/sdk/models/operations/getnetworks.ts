import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetNetworksAdDealStatusEnum {
    Active = "active",
    Inactive = "inactive",
    PendingActive = "pending_active",
    PendingInactive = "pending_inactive"
}

export enum GetNetworksSortEnum {
    CreatedAt = "created_at",
    Name = "name",
    UpdatedAt = "updated_at"
}


export class GetNetworksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ad_deal_status" })
  adDealStatus?: GetNetworksAdDealStatusEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ad_rep_account_id" })
  adRepAccountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids[]" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[number]" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page[size]" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: GetNetworksSortEnum[];
}


export class GetNetworks200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Network })
  data?: shared.Network[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.Links;
}


// GetNetworks400ApplicationVndApiPlusJsonErrorsSource
/** 
 * An object containing references to the source of the error, optionally including any of the following members.
 * 
**/
export class GetNetworks400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=pointer" })
  pointer?: string;
}


export class GetNetworks400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GetNetworks400ApplicationVndApiPlusJsonErrorsSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetNetworks400ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetNetworks400ApplicationVndApiPlusJsonErrors })
  errors?: GetNetworks400ApplicationVndApiPlusJsonErrors[];
}


export class GetNetworksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetNetworksQueryParams;
}


export class GetNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworks200ApplicationVndApiPlusJsonObject?: GetNetworks200ApplicationVndApiPlusJson;

  @SpeakeasyMetadata()
  getNetworks400ApplicationVndApiPlusJsonObject?: GetNetworks400ApplicationVndApiPlusJson;
}
