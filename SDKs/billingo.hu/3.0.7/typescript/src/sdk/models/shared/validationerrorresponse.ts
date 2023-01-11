import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";



export class ValidationErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ValidationError })
  errors?: ValidationError[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
