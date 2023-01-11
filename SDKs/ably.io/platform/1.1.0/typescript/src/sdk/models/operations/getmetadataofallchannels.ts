import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetMetadataOfAllChannelsByEnum {
    Value = "value",
    Id = "id"
}


export class GetMetadataOfAllChannelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=by" })
  by?: GetMetadataOfAllChannelsByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefix" })
  prefix?: string;
}


export class GetMetadataOfAllChannelsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class GetMetadataOfAllChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMetadataOfAllChannelsQueryParams;

  @SpeakeasyMetadata()
  headers: GetMetadataOfAllChannelsHeaders;
}


export class GetMetadataOfAllChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMetadataOfAllChannels2XXApplicationJSONOneOf?: any;

  @SpeakeasyMetadata()
  getMetadataOfAllChannels2XXTextHTMLString?: string;
}
