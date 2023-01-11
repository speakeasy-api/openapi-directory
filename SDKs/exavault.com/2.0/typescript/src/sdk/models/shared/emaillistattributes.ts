import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailListAttributes
/** 
 * Information for the email list, including its short title and recipient emails
**/
export class EmailListAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
