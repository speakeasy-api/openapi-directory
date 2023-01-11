import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PatientAllergySnomedReactionEnum {
    Unknown = "",
    FourteenMillionSixHundredAndSixtyNineThousandAndOne = "14669001",
    ThirtyNineMillionFiveHundredAndSeventyNineThousandAndOne = "39579001",
    FiftySevenMillionSixHundredAndSeventySixThousandAndTwo = "57676002",
    FortyThreeMillionSevenHundredAndTwentyFourThousandAndTwo = "43724002",
    FortyNineMillionSevenHundredAndTwentySevenThousandAndTwo = "49727002",
    ThreeHundredAndEightySixMillionSixHundredAndSixtyOneThousandAndSix = "386661006",
    TwentyFiveMillionSixtyFourThousandAndTwo = "25064002",
    TwoHundredAndFortySevenMillionFourHundredAndSeventyTwoThousandAndFour = "247472004",
    TwoHundredAndSeventyOneMillionSevenHundredAndNinetyFiveThousandAndSix = "271795006",
    SixtyEightMillionNineHundredAndSixtyTwoThousandAndOne = "68962001",
    SixtyEightMillionTwoHundredAndThirtyFiveThousand = "68235000",
    FourHundredAndTwentyTwoMillionFiveHundredAndEightySevenThousandAndSeven = "422587007",
    NinetyFiveMillionThreeHundredAndEightyEightThousand = "95388000",
    TwoHundredAndSeventyOneMillionEightHundredAndSevenThousandAndThree = "271807003",
    TwoHundredAndSeventyOneMillionEightHundredAndTwentyFiveThousandAndFive = "271825005",
    SixtyFourMillionFiveHundredAndThirtyOneThousandAndThree = "64531003",
    TwoHundredAndSixtySevenMillionThirtySixThousandAndSeven = "267036007",
    OneHundredAndSixtyTwoMillionThreeHundredAndNinetySevenThousandAndThree = "162397003",
    SixtyFiveMillionOneHundredAndTwentyFourThousandAndFour = "65124004"
}

export enum PatientAllergyStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class PatientAllergy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;

  @SpeakeasyMetadata({ data: "json, name=reaction" })
  reaction?: string;

  @SpeakeasyMetadata({ data: "json, name=rxnorm" })
  rxnorm?: string;

  @SpeakeasyMetadata({ data: "json, name=snomed_reaction" })
  snomedReaction?: PatientAllergySnomedReactionEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PatientAllergyStatusEnum;
}
