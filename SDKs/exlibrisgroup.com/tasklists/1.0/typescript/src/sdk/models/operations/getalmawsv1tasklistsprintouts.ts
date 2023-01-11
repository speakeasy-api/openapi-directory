import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAlmawsV1TaskListsPrintoutsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=letter" })
  letter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=printer_id" })
  printerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=printout_id" })
  printoutId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


// GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter
/** 
 * The printer.
**/
export class GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus
/** 
 * Status of the printout (Pending/Printed/Canceled).
**/
export class GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout
/** 
 * Printout Object.
**/
export class GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=letter" })
  letter?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=printer" })
  printer?: GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutPrinter;

  @SpeakeasyMetadata({ data: "json, name=printout" })
  printout?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintoutStatus;
}


// GetAlmawsV1TaskListsPrintouts200ApplicationJson
/** 
 * A list of printouts.
**/
export class GetAlmawsV1TaskListsPrintouts200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=printout", elemType: GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout })
  printout?: GetAlmawsV1TaskListsPrintouts200ApplicationJsonPrintout[];

  @SpeakeasyMetadata({ data: "json, name=total_record_count" })
  totalRecordCount?: number;
}


export class GetAlmawsV1TaskListsPrintoutsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAlmawsV1TaskListsPrintoutsQueryParams;
}


export class GetAlmawsV1TaskListsPrintoutsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAlmawsV1TaskListsPrintouts200ApplicationJSONObject?: GetAlmawsV1TaskListsPrintouts200ApplicationJson;
}
