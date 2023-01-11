import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelId" })
  channelId: string;
}


export class GetChannelCategoriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Encoding" })
  acceptEncoding: string[];
}


export class GetChannelCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelCategoriesPathParams;

  @SpeakeasyMetadata()
  headers: GetChannelCategoriesHeaders;
}


export class GetChannelCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  channelRootCategory?: shared.ChannelRootCategory;
}
