import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter
/** 
 * The printer.
**/
export class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus
/** 
 * Status of the printout (Pending/Printed/Canceled).
**/
export class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout
/** 
 * Printout Object.
**/
export class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=letter" })
  letter?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=printer" })
  printer?: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter;

  @SpeakeasyMetadata({ data: "json, name=printout" })
  printout?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus;
}


// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema
/** 
 * A list of printouts.
**/
export class Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=printout", elemType: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout })
  printout?: Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout[];

  @SpeakeasyMetadata({ data: "json, name=total_record_count" })
  totalRecordCount?: number;
}
