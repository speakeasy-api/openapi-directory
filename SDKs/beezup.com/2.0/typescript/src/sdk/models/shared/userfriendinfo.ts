import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserFriendInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=company" })
  company: string;

  @SpeakeasyMetadata({ data: "json, name=countryIsoCodeAlpha3" })
  countryIsoCodeAlpha3: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=profilePictureUrl" })
  profilePictureUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=whatIDo" })
  whatIDo?: string;
}
