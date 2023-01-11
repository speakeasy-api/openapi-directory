import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonUserErrorMessage } from "./beezupcommonusererrormessage";



export class BeezUpCommonErrorResponseMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BeezUpCommonUserErrorMessage })
  errors: BeezUpCommonUserErrorMessage[];
}
