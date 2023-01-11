import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlmawsV1TaskListsPrintoutsPrintoutIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=printout_id" })
  printoutId: string;
}


export class PostAlmawsV1TaskListsPrintoutsPrintoutIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=op" })
  op: string;
}


export class PostAlmawsV1TaskListsPrintoutsPrintoutIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAlmawsV1TaskListsPrintoutsPrintoutIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostAlmawsV1TaskListsPrintoutsPrintoutIdQueryParams;
}


export class PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems?: shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems;
}
