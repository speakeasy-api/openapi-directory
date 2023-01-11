import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=login" })
  login: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
