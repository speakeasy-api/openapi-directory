import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { ImportAlreadyInProgressResponseLinks } from "./importalreadyinprogressresponselinks";



export class ImportAlreadyInProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BeezUpCommonUserErrorMessage })
  errors: BeezUpCommonUserErrorMessage[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ImportAlreadyInProgressResponseLinks;
}
