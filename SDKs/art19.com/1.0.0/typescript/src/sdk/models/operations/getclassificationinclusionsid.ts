import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClassificationInclusionsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetClassificationInclusionsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.ClassificationInclusion;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.ResourceLink;
}


export class GetClassificationInclusionsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetClassificationInclusionsIdPathParams;
}


export class GetClassificationInclusionsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getClassificationInclusionsId200ApplicationVndApiPlusJsonObject?: GetClassificationInclusionsId200ApplicationVndApiPlusJson;
}
