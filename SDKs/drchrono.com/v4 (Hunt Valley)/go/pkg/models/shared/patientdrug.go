package shared

type PatientDrugOrderStatusEnum string

const (
	PatientDrugOrderStatusEnumUnknown                 PatientDrugOrderStatusEnum = ""
	PatientDrugOrderStatusEnumOrdered                 PatientDrugOrderStatusEnum = "Ordered"
	PatientDrugOrderStatusEnumAdministeredDuringVisit PatientDrugOrderStatusEnum = "Administered during visit"
	PatientDrugOrderStatusEnumElectronicERxSent       PatientDrugOrderStatusEnum = "Electronic eRx Sent"
	PatientDrugOrderStatusEnumPhonedIntoPharmacy      PatientDrugOrderStatusEnum = "Phoned into Pharmacy"
	PatientDrugOrderStatusEnumFaxedToPharmacy         PatientDrugOrderStatusEnum = "Faxed to Pharmacy"
	PatientDrugOrderStatusEnumPaperRx                 PatientDrugOrderStatusEnum = "Paper Rx"
	PatientDrugOrderStatusEnumPrescriptionPrinted     PatientDrugOrderStatusEnum = "Prescription Printed"
	PatientDrugOrderStatusEnumDiscontinued            PatientDrugOrderStatusEnum = "Discontinued"
	PatientDrugOrderStatusEnumPrescribedByOtherDr     PatientDrugOrderStatusEnum = "Prescribed by other Dr"
	PatientDrugOrderStatusEnumOverTheCounter          PatientDrugOrderStatusEnum = "Over the Counter"
)

type PatientDrugStatusEnum string

const (
	PatientDrugStatusEnumActive   PatientDrugStatusEnum = "active"
	PatientDrugStatusEnumInactive PatientDrugStatusEnum = "inactive"
)

type PatientDrug struct {
	Appointment       *int64                      `json:"appointment,omitempty"`
	DatePrescribed    *string                     `json:"date_prescribed,omitempty"`
	DateStartedTaking *string                     `json:"date_started_taking,omitempty"`
	DateStoppedTaking *string                     `json:"date_stopped_taking,omitempty"`
	Daw               *bool                       `json:"daw,omitempty"`
	DispenseQuantity  *float64                    `json:"dispense_quantity,omitempty"`
	Doctor            int64                       `json:"doctor"`
	DosageQuantity    *string                     `json:"dosage_quantity,omitempty"`
	DosageUnits       *string                     `json:"dosage_units,omitempty"`
	Frequency         *string                     `json:"frequency,omitempty"`
	ID                *int64                      `json:"id,omitempty"`
	Indication        *string                     `json:"indication,omitempty"`
	Name              *string                     `json:"name,omitempty"`
	Ndc               *string                     `json:"ndc,omitempty"`
	Notes             *string                     `json:"notes,omitempty"`
	NumberRefills     *int64                      `json:"number_refills,omitempty"`
	OrderStatus       *PatientDrugOrderStatusEnum `json:"order_status,omitempty"`
	Patient           int64                       `json:"patient"`
	PharmacyNote      *string                     `json:"pharmacy_note,omitempty"`
	Prn               *bool                       `json:"prn,omitempty"`
	Route             *string                     `json:"route,omitempty"`
	Rxnorm            *string                     `json:"rxnorm,omitempty"`
	SignatureNote     *string                     `json:"signature_note,omitempty"`
	Status            *PatientDrugStatusEnum      `json:"status,omitempty"`
}
