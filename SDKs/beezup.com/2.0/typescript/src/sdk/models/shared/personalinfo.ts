import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PersonalInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beezUPTimeZoneId" })
  beezUPTimeZoneId: number;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "json, name=whatIDo" })
  whatIDo?: string;
}
