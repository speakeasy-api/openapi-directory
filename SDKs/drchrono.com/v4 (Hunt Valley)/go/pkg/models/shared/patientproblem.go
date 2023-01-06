package shared

type PatientProblemIcdVersionEnum string

const (
	PatientProblemIcdVersionEnumNine PatientProblemIcdVersionEnum = "9"
	PatientProblemIcdVersionEnumTen  PatientProblemIcdVersionEnum = "10"
)

type PatientProblemStatusEnum string

const (
	PatientProblemStatusEnumActive   PatientProblemStatusEnum = "active"
	PatientProblemStatusEnumInactive PatientProblemStatusEnum = "inactive"
	PatientProblemStatusEnumResolved PatientProblemStatusEnum = "resolved"
)

type PatientProblem struct {
	DateChanged   *string                       `json:"date_changed,omitempty"`
	DateDiagnosis *string                       `json:"date_diagnosis,omitempty"`
	DateOnset     *string                       `json:"date_onset,omitempty"`
	Description   *string                       `json:"description,omitempty"`
	Doctor        int64                         `json:"doctor"`
	IcdCode       *string                       `json:"icd_code,omitempty"`
	IcdVersion    *PatientProblemIcdVersionEnum `json:"icd_version,omitempty"`
	ID            *int64                        `json:"id,omitempty"`
	InfoURL       *string                       `json:"info_url,omitempty"`
	Name          *string                       `json:"name,omitempty"`
	Notes         *string                       `json:"notes,omitempty"`
	Patient       int64                         `json:"patient"`
	SnomedCtCode  *string                       `json:"snomed_ct_code,omitempty"`
	Status        *PatientProblemStatusEnum     `json:"status,omitempty"`
}
