import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClassificationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetClassificationsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.Classification;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.ResourceLink;
}


export class GetClassificationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClassificationsIdPathParams;
}


export class GetClassificationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClassificationsId200ApplicationVndApiPlusJsonObject?: GetClassificationsId200ApplicationVndApiPlusJson;
}
