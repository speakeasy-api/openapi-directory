import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExportChannelCatalogProductInfoListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class ExportChannelCatalogProductInfoListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format: shared.ExportFormatInQueryGeneralParameterEnum;
}


export class ExportChannelCatalogProductInfoListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExportChannelCatalogProductInfoListPathParams;

  @SpeakeasyMetadata()
  queryParams: ExportChannelCatalogProductInfoListQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetChannelCatalogProductInfoListRequest;
}


export class ExportChannelCatalogProductInfoListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  beezUPCommonLink3?: shared.BeezUpCommonLink3;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
