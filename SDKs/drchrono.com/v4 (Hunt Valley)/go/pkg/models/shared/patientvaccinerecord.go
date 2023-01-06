package shared

type PatientVaccineRecordVaccinationStatusEnum string

const (
	PatientVaccineRecordVaccinationStatusEnumCp PatientVaccineRecordVaccinationStatusEnum = "CP"
	PatientVaccineRecordVaccinationStatusEnumRe PatientVaccineRecordVaccinationStatusEnum = "RE"
	PatientVaccineRecordVaccinationStatusEnumNa PatientVaccineRecordVaccinationStatusEnum = "NA"
	PatientVaccineRecordVaccinationStatusEnumPa PatientVaccineRecordVaccinationStatusEnum = "PA"
)

// PatientVaccineRecordVaccineDose
// Vaccine dose ID
type PatientVaccineRecordVaccineDose struct {
	ID           *int64  `json:"id,omitempty"`
	MaxAgeMonths *int64  `json:"max_age_months,omitempty"`
	MinAgeMonths *int64  `json:"min_age_months,omitempty"`
	Title        *string `json:"title,omitempty"`
}

type PatientVaccineRecordFundingEligibilityEnum string

const (
	PatientVaccineRecordFundingEligibilityEnumV01 PatientVaccineRecordFundingEligibilityEnum = "V01"
	PatientVaccineRecordFundingEligibilityEnumV02 PatientVaccineRecordFundingEligibilityEnum = "V02"
	PatientVaccineRecordFundingEligibilityEnumV03 PatientVaccineRecordFundingEligibilityEnum = "V03"
	PatientVaccineRecordFundingEligibilityEnumV04 PatientVaccineRecordFundingEligibilityEnum = "V04"
	PatientVaccineRecordFundingEligibilityEnumV05 PatientVaccineRecordFundingEligibilityEnum = "V05"
	PatientVaccineRecordFundingEligibilityEnumV07 PatientVaccineRecordFundingEligibilityEnum = "V07"
)

type PatientVaccineRecordObservedImmunityEnum string

const (
	PatientVaccineRecordObservedImmunityEnumThreeHundredAndNinetyEightMillionOneHundredAndTwoThousandAndNine   PatientVaccineRecordObservedImmunityEnum = "398102009"
	PatientVaccineRecordObservedImmunityEnumFourHundredAndNineMillionFourHundredAndNinetyEightThousandAndFour  PatientVaccineRecordObservedImmunityEnum = "409498004"
	PatientVaccineRecordObservedImmunityEnumThreeHundredAndNinetySevenMillionFourHundredAndTwentyEightThousand PatientVaccineRecordObservedImmunityEnum = "397428000"
	PatientVaccineRecordObservedImmunityEnumEighteenMillionSixHundredAndTwentyFourThousand                     PatientVaccineRecordObservedImmunityEnum = "18624000"
	PatientVaccineRecordObservedImmunityEnumNinetyOneMillionFourHundredAndTwentyEightThousandAndFive           PatientVaccineRecordObservedImmunityEnum = "91428005"
	PatientVaccineRecordObservedImmunityEnumTwoHundredAndSeventyOneMillionFiveHundredAndElevenThousand         PatientVaccineRecordObservedImmunityEnum = "271511000"
	PatientVaccineRecordObservedImmunityEnumTwoHundredAndFortyMillionFiveHundredAndThirtyTwoThousandAndNine    PatientVaccineRecordObservedImmunityEnum = "240532009"
	PatientVaccineRecordObservedImmunityEnumSixMillionOneHundredAndFortyTwoThousandAndFour                     PatientVaccineRecordObservedImmunityEnum = "6142004"
	PatientVaccineRecordObservedImmunityEnumFiftyTwoMillionNineHundredAndFortySevenThousandAndSix              PatientVaccineRecordObservedImmunityEnum = "52947006"
	PatientVaccineRecordObservedImmunityEnumFourteenMillionOneHundredAndEightyNineThousandAndFour              PatientVaccineRecordObservedImmunityEnum = "14189004"
	PatientVaccineRecordObservedImmunityEnumTwentyThreeMillionFiveHundredAndElevenThousandAndSix               PatientVaccineRecordObservedImmunityEnum = "23511006"
	PatientVaccineRecordObservedImmunityEnumThirtySixMillionNineHundredAndEightyNineThousandAndFive            PatientVaccineRecordObservedImmunityEnum = "36989005"
	PatientVaccineRecordObservedImmunityEnumTwentySevenMillionEightHundredAndThirtySixThousandAndSeven         PatientVaccineRecordObservedImmunityEnum = "27836007"
	PatientVaccineRecordObservedImmunityEnumSixteenMillionEightHundredAndFourteenThousandAndFour               PatientVaccineRecordObservedImmunityEnum = "16814004"
	PatientVaccineRecordObservedImmunityEnumFourteenMillionOneHundredAndSixtyEightThousandAndEight             PatientVaccineRecordObservedImmunityEnum = "14168008"
	PatientVaccineRecordObservedImmunityEnumThirtySixMillionSixHundredAndFiftyThreeThousand                    PatientVaccineRecordObservedImmunityEnum = "36653000"
	PatientVaccineRecordObservedImmunityEnumSeventySixMillionNineHundredAndTwoThousandAndSix                   PatientVaccineRecordObservedImmunityEnum = "76902006"
	PatientVaccineRecordObservedImmunityEnumSixtySixMillionSeventyOneThousandAndTwo                            PatientVaccineRecordObservedImmunityEnum = "66071002"
	PatientVaccineRecordObservedImmunityEnumFourMillionEightHundredAndThirtyFourThousand                       PatientVaccineRecordObservedImmunityEnum = "4834000"
	PatientVaccineRecordObservedImmunityEnumOneHundredAndElevenMillionEightHundredAndFiftyTwoThousandAndThree  PatientVaccineRecordObservedImmunityEnum = "111852003"
	PatientVaccineRecordObservedImmunityEnumThirtyEightMillionNineHundredAndSevenThousandAndThree              PatientVaccineRecordObservedImmunityEnum = "38907003"
	PatientVaccineRecordObservedImmunityEnumFortyMillionFourHundredAndSixtyEightThousandAndThree               PatientVaccineRecordObservedImmunityEnum = "40468003"
	PatientVaccineRecordObservedImmunityEnumSixteenMillionFiveHundredAndFortyOneThousandAndOne                 PatientVaccineRecordObservedImmunityEnum = "16541001"
)

type PatientVaccineRecordRecordTypeEnum string

const (
	PatientVaccineRecordRecordTypeEnumZero  PatientVaccineRecordRecordTypeEnum = "00"
	PatientVaccineRecordRecordTypeEnumOne   PatientVaccineRecordRecordTypeEnum = "01"
	PatientVaccineRecordRecordTypeEnumTwo   PatientVaccineRecordRecordTypeEnum = "02"
	PatientVaccineRecordRecordTypeEnumThree PatientVaccineRecordRecordTypeEnum = "03"
	PatientVaccineRecordRecordTypeEnumFour  PatientVaccineRecordRecordTypeEnum = "04"
	PatientVaccineRecordRecordTypeEnumFive  PatientVaccineRecordRecordTypeEnum = "05"
	PatientVaccineRecordRecordTypeEnumSix   PatientVaccineRecordRecordTypeEnum = "06"
	PatientVaccineRecordRecordTypeEnumSeven PatientVaccineRecordRecordTypeEnum = "07"
	PatientVaccineRecordRecordTypeEnumEight PatientVaccineRecordRecordTypeEnum = "08"
)

type PatientVaccineRecord struct {
	AdministeredAt      *int64                                      `json:"administered_at,omitempty"`
	AdministeredBy      *string                                     `json:"administered_by,omitempty"`
	AdministrationStart *string                                     `json:"administration_start,omitempty"`
	Amount              *float64                                    `json:"amount,omitempty"`
	Comments            *string                                     `json:"comments,omitempty"`
	CompletionStatus    *PatientVaccineRecordVaccinationStatusEnum  `json:"completion_status,omitempty"`
	ConsentForm         *int64                                      `json:"consent_form,omitempty"`
	CptCode             *string                                     `json:"cpt_code,omitempty"`
	CreatedAt           *string                                     `json:"created_at,omitempty"`
	CvxCode             string                                      `json:"cvx_code"`
	Doses               []PatientVaccineRecordVaccineDose           `json:"doses,omitempty"`
	EnteredBy           *string                                     `json:"entered_by,omitempty"`
	FundingEligibility  *PatientVaccineRecordFundingEligibilityEnum `json:"funding_eligibility,omitempty"`
	ID                  *int64                                      `json:"id,omitempty"`
	Name                string                                      `json:"name"`
	NextDoseDate        *string                                     `json:"next_dose_date,omitempty"`
	ObservedImmunity    *PatientVaccineRecordObservedImmunityEnum   `json:"observed_immunity,omitempty"`
	OrderingDoctor      *int64                                      `json:"ordering_doctor,omitempty"`
	Patient             int64                                       `json:"patient"`
	RecordSource        *PatientVaccineRecordRecordTypeEnum         `json:"record_source,omitempty"`
	Route               *string                                     `json:"route,omitempty"`
	Site                *string                                     `json:"site,omitempty"`
	Units               *string                                     `json:"units,omitempty"`
	UpdatedAt           *string                                     `json:"updated_at,omitempty"`
	VaccineInventory    *int64                                      `json:"vaccine_inventory,omitempty"`
	Vis                 *string                                     `json:"vis,omitempty"`
}
