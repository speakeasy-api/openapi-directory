package shared

type PatientAllergySnomedReactionEnum string

const (
	PatientAllergySnomedReactionEnumUnknown                                                                 PatientAllergySnomedReactionEnum = ""
	PatientAllergySnomedReactionEnumFourteenMillionSixHundredAndSixtyNineThousandAndOne                     PatientAllergySnomedReactionEnum = "14669001"
	PatientAllergySnomedReactionEnumThirtyNineMillionFiveHundredAndSeventyNineThousandAndOne                PatientAllergySnomedReactionEnum = "39579001"
	PatientAllergySnomedReactionEnumFiftySevenMillionSixHundredAndSeventySixThousandAndTwo                  PatientAllergySnomedReactionEnum = "57676002"
	PatientAllergySnomedReactionEnumFortyThreeMillionSevenHundredAndTwentyFourThousandAndTwo                PatientAllergySnomedReactionEnum = "43724002"
	PatientAllergySnomedReactionEnumFortyNineMillionSevenHundredAndTwentySevenThousandAndTwo                PatientAllergySnomedReactionEnum = "49727002"
	PatientAllergySnomedReactionEnumThreeHundredAndEightySixMillionSixHundredAndSixtyOneThousandAndSix      PatientAllergySnomedReactionEnum = "386661006"
	PatientAllergySnomedReactionEnumTwentyFiveMillionSixtyFourThousandAndTwo                                PatientAllergySnomedReactionEnum = "25064002"
	PatientAllergySnomedReactionEnumTwoHundredAndFortySevenMillionFourHundredAndSeventyTwoThousandAndFour   PatientAllergySnomedReactionEnum = "247472004"
	PatientAllergySnomedReactionEnumTwoHundredAndSeventyOneMillionSevenHundredAndNinetyFiveThousandAndSix   PatientAllergySnomedReactionEnum = "271795006"
	PatientAllergySnomedReactionEnumSixtyEightMillionNineHundredAndSixtyTwoThousandAndOne                   PatientAllergySnomedReactionEnum = "68962001"
	PatientAllergySnomedReactionEnumSixtyEightMillionTwoHundredAndThirtyFiveThousand                        PatientAllergySnomedReactionEnum = "68235000"
	PatientAllergySnomedReactionEnumFourHundredAndTwentyTwoMillionFiveHundredAndEightySevenThousandAndSeven PatientAllergySnomedReactionEnum = "422587007"
	PatientAllergySnomedReactionEnumNinetyFiveMillionThreeHundredAndEightyEightThousand                     PatientAllergySnomedReactionEnum = "95388000"
	PatientAllergySnomedReactionEnumTwoHundredAndSeventyOneMillionEightHundredAndSevenThousandAndThree      PatientAllergySnomedReactionEnum = "271807003"
	PatientAllergySnomedReactionEnumTwoHundredAndSeventyOneMillionEightHundredAndTwentyFiveThousandAndFive  PatientAllergySnomedReactionEnum = "271825005"
	PatientAllergySnomedReactionEnumSixtyFourMillionFiveHundredAndThirtyOneThousandAndThree                 PatientAllergySnomedReactionEnum = "64531003"
	PatientAllergySnomedReactionEnumTwoHundredAndSixtySevenMillionThirtySixThousandAndSeven                 PatientAllergySnomedReactionEnum = "267036007"
	PatientAllergySnomedReactionEnumOneHundredAndSixtyTwoMillionThreeHundredAndNinetySevenThousandAndThree  PatientAllergySnomedReactionEnum = "162397003"
	PatientAllergySnomedReactionEnumSixtyFiveMillionOneHundredAndTwentyFourThousandAndFour                  PatientAllergySnomedReactionEnum = "65124004"
)

type PatientAllergyStatusEnum string

const (
	PatientAllergyStatusEnumActive   PatientAllergyStatusEnum = "active"
	PatientAllergyStatusEnumInactive PatientAllergyStatusEnum = "inactive"
)

type PatientAllergy struct {
	Description    *string                           `json:"description,omitempty"`
	Doctor         int64                             `json:"doctor"`
	ID             *int64                            `json:"id,omitempty"`
	Notes          *string                           `json:"notes,omitempty"`
	Patient        int64                             `json:"patient"`
	Reaction       *string                           `json:"reaction,omitempty"`
	Rxnorm         *string                           `json:"rxnorm,omitempty"`
	SnomedReaction *PatientAllergySnomedReactionEnum `json:"snomed_reaction,omitempty"`
	Status         *PatientAllergyStatusEnum         `json:"status,omitempty"`
}
