import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAlmawsV1TaskListsPrintoutsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=letter" })
  letter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=op" })
  op: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=printer_id" })
  printerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=printout_id" })
  printoutId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class PostAlmawsV1TaskListsPrintoutsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAlmawsV1TaskListsPrintoutsQueryParams;
}


export class PostAlmawsV1TaskListsPrintoutsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema?: shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema;
}
