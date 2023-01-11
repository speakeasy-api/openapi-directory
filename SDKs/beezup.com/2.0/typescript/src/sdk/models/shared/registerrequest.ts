import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commercialOwnerUserId" })
  commercialOwnerUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=cultureName" })
  cultureName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;
}
