import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PatientVaccineRecordVaccinationStatusEnum {
    Cp = "CP",
    Re = "RE",
    Na = "NA",
    Pa = "PA"
}
/**
 * Vaccine dose ID
**/
export declare class PatientVaccineRecordVaccineDose extends SpeakeasyBase {
    id?: number;
    maxAgeMonths?: number;
    minAgeMonths?: number;
    title?: string;
}
export declare enum PatientVaccineRecordFundingEligibilityEnum {
    V01 = "V01",
    V02 = "V02",
    V03 = "V03",
    V04 = "V04",
    V05 = "V05",
    V07 = "V07"
}
export declare enum PatientVaccineRecordObservedImmunityEnum {
    ThreeHundredAndNinetyEightMillionOneHundredAndTwoThousandAndNine = "398102009",
    FourHundredAndNineMillionFourHundredAndNinetyEightThousandAndFour = "409498004",
    ThreeHundredAndNinetySevenMillionFourHundredAndTwentyEightThousand = "397428000",
    EighteenMillionSixHundredAndTwentyFourThousand = "18624000",
    NinetyOneMillionFourHundredAndTwentyEightThousandAndFive = "91428005",
    TwoHundredAndSeventyOneMillionFiveHundredAndElevenThousand = "271511000",
    TwoHundredAndFortyMillionFiveHundredAndThirtyTwoThousandAndNine = "240532009",
    SixMillionOneHundredAndFortyTwoThousandAndFour = "6142004",
    FiftyTwoMillionNineHundredAndFortySevenThousandAndSix = "52947006",
    FourteenMillionOneHundredAndEightyNineThousandAndFour = "14189004",
    TwentyThreeMillionFiveHundredAndElevenThousandAndSix = "23511006",
    ThirtySixMillionNineHundredAndEightyNineThousandAndFive = "36989005",
    TwentySevenMillionEightHundredAndThirtySixThousandAndSeven = "27836007",
    SixteenMillionEightHundredAndFourteenThousandAndFour = "16814004",
    FourteenMillionOneHundredAndSixtyEightThousandAndEight = "14168008",
    ThirtySixMillionSixHundredAndFiftyThreeThousand = "36653000",
    SeventySixMillionNineHundredAndTwoThousandAndSix = "76902006",
    SixtySixMillionSeventyOneThousandAndTwo = "66071002",
    FourMillionEightHundredAndThirtyFourThousand = "4834000",
    OneHundredAndElevenMillionEightHundredAndFiftyTwoThousandAndThree = "111852003",
    ThirtyEightMillionNineHundredAndSevenThousandAndThree = "38907003",
    FortyMillionFourHundredAndSixtyEightThousandAndThree = "40468003",
    SixteenMillionFiveHundredAndFortyOneThousandAndOne = "16541001"
}
export declare enum PatientVaccineRecordRecordTypeEnum {
    Zero = "00",
    One = "01",
    Two = "02",
    Three = "03",
    Four = "04",
    Five = "05",
    Six = "06",
    Seven = "07",
    Eight = "08"
}
export declare class PatientVaccineRecord extends SpeakeasyBase {
    administeredAt?: number;
    administeredBy?: string;
    administrationStart?: string;
    amount?: number;
    comments?: string;
    completionStatus?: PatientVaccineRecordVaccinationStatusEnum;
    consentForm?: number;
    cptCode?: string;
    createdAt?: string;
    cvxCode: string;
    doses?: PatientVaccineRecordVaccineDose[];
    enteredBy?: string;
    fundingEligibility?: PatientVaccineRecordFundingEligibilityEnum;
    id?: number;
    name: string;
    nextDoseDate?: string;
    observedImmunity?: PatientVaccineRecordObservedImmunityEnum;
    orderingDoctor?: number;
    patient: number;
    recordSource?: PatientVaccineRecordRecordTypeEnum;
    route?: string;
    site?: string;
    units?: string;
    updatedAt?: string;
    vaccineInventory?: number;
    vis?: string;
}
