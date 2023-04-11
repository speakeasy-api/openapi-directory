import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SNOMED code for the reaction. For possible SnoMED codes, please see [this link from PHIN VADS](https://phinvads.cdc.gov/vads/ViewValueSet.action?id=896AABB4-5ACD-DE11-913D-0015173D1785)
 */
export declare enum PatientAllergySnomedReactionEnum {
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
/**
 * One of `"active"`, `"inactive"`. If absent in `POST`, default to `"active"`
 */
export declare enum PatientAllergyStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Created
 */
export declare class PatientAllergy extends SpeakeasyBase {
    /**
     * Description of the allergy, such as `"Cat hair"`
     */
    description?: string;
    /**
     * Id of the doctor who diagnosed the allergy
     */
    doctor: number;
    id?: number;
    /**
     * Any additional notes from the provider
     */
    notes?: string;
    patient: number;
    /**
     * Short description of the patient's allergic reaction, such as `"Hives"`
     */
    reaction?: string;
    /**
     * If the allergy is a drug allergy, this is the RxNorm code of the drug
     */
    rxnorm?: string;
    /**
     * SNOMED code for the reaction. For possible SnoMED codes, please see [this link from PHIN VADS](https://phinvads.cdc.gov/vads/ViewValueSet.action?id=896AABB4-5ACD-DE11-913D-0015173D1785)
     */
    snomedReaction?: PatientAllergySnomedReactionEnum;
    /**
     * One of `"active"`, `"inactive"`. If absent in `POST`, default to `"active"`
     */
    status?: PatientAllergyStatusEnum;
}
