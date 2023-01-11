import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PatientVaccineRecordVaccinationStatusEnum {
    Cp = "CP",
    Re = "RE",
    Na = "NA",
    Pa = "PA"
}


// PatientVaccineRecordVaccineDose
/** 
 * Vaccine dose ID
**/
export class PatientVaccineRecordVaccineDose extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=max_age_months" })
  maxAgeMonths?: number;

  @SpeakeasyMetadata({ data: "json, name=min_age_months" })
  minAgeMonths?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

export enum PatientVaccineRecordFundingEligibilityEnum {
    V01 = "V01",
    V02 = "V02",
    V03 = "V03",
    V04 = "V04",
    V05 = "V05",
    V07 = "V07"
}

export enum PatientVaccineRecordObservedImmunityEnum {
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

export enum PatientVaccineRecordRecordTypeEnum {
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


export class PatientVaccineRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=administered_at" })
  administeredAt?: number;

  @SpeakeasyMetadata({ data: "json, name=administered_by" })
  administeredBy?: string;

  @SpeakeasyMetadata({ data: "json, name=administration_start" })
  administrationStart?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=completion_status" })
  completionStatus?: PatientVaccineRecordVaccinationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=consent_form" })
  consentForm?: number;

  @SpeakeasyMetadata({ data: "json, name=cpt_code" })
  cptCode?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=cvx_code" })
  cvxCode: string;

  @SpeakeasyMetadata({ data: "json, name=doses", elemType: PatientVaccineRecordVaccineDose })
  doses?: PatientVaccineRecordVaccineDose[];

  @SpeakeasyMetadata({ data: "json, name=entered_by" })
  enteredBy?: string;

  @SpeakeasyMetadata({ data: "json, name=funding_eligibility" })
  fundingEligibility?: PatientVaccineRecordFundingEligibilityEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=next_dose_date" })
  nextDoseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=observed_immunity" })
  observedImmunity?: PatientVaccineRecordObservedImmunityEnum;

  @SpeakeasyMetadata({ data: "json, name=ordering_doctor" })
  orderingDoctor?: number;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;

  @SpeakeasyMetadata({ data: "json, name=record_source" })
  recordSource?: PatientVaccineRecordRecordTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=route" })
  route?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=vaccine_inventory" })
  vaccineInventory?: number;

  @SpeakeasyMetadata({ data: "json, name=vis" })
  vis?: string;
}
