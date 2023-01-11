import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormEntryField } from "./formentryfield";


export enum FormEntryAttributesStatusEnum {
    Pending = "pending",
    Completed = "completed"
}


export class FormEntryAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: FormEntryField })
  fields?: FormEntryField[];

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: Date;

  @SpeakeasyMetadata({ data: "json, name=paths" })
  paths?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FormEntryAttributesStatusEnum;
}


// FormEntry
/** 
 * Contains the data submitted for a form.
**/
export class FormEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: FormEntryAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
