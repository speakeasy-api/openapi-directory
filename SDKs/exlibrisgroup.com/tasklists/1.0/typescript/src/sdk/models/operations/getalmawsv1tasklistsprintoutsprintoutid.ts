import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlmawsV1TaskListsPrintoutsPrintoutIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=printout_id" })
  printoutId: string;
}


export class GetAlmawsV1TaskListsPrintoutsPrintoutIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAlmawsV1TaskListsPrintoutsPrintoutIdPathParams;
}


export class GetAlmawsV1TaskListsPrintoutsPrintoutIdResponse extends SpeakeasyBase {
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
