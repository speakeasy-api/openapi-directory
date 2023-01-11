import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { ErrorResponseMessagePaymentRequiredLinks } from "./errorresponsemessagepaymentrequiredlinks";



export class ErrorResponseMessagePaymentRequired extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BeezUpCommonUserErrorMessage })
  errors: BeezUpCommonUserErrorMessage[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: ErrorResponseMessagePaymentRequiredLinks;
}
