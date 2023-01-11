import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAvailableChannelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=storeId" })
  storeId: string;
}


export class GetAvailableChannelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAvailableChannelsQueryParams;
}


export class GetAvailableChannelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ChannelHeader })
  channelHeaders?: shared.ChannelHeader[];
}
