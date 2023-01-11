import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PrivateLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires_date" })
  expiresDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;
}
