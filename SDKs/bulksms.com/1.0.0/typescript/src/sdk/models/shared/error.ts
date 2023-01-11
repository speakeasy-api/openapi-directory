import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorT
/** 
 * See the [errors page](errors/) for more detail on what kind of errors you can get.
**/
export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
