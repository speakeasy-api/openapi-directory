// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"openapi/pkg/types"
)

type ScheduleE struct {
	ActionCode     *string `json:"action_code,omitempty"`
	ActionCodeFull *string `json:"action_code_full,omitempty"`
	// Amendent types:
	//     -N   new
	//     -A   amendment
	//     -T   terminated
	//     -C   consolidated
	//     -M   multi-candidate
	//     -S   secondary
	//
	// NULL might be new or amendment. If amendment indicator is null and the filings is the first or first in a chain treat it as if it was a new. If it is not the first or first in a chain then treat the filing as an amendment.
	//
	AmendmentIndicator *string `json:"amendment_indicator,omitempty"`
	// Number of times the report has been amended.
	//
	AmendmentNumber            *int    `json:"amendment_number,omitempty"`
	BackReferenceScheduleName  *string `json:"back_reference_schedule_name,omitempty"`
	BackReferenceTransactionID *string `json:"back_reference_transaction_id,omitempty"`
	Candidate                  *string `json:"candidate,omitempty"`
	CandidateFirstName         *string `json:"candidate_first_name,omitempty"`
	CandidateID                *string `json:"candidate_id,omitempty"`
	CandidateLastName          *string `json:"candidate_last_name,omitempty"`
	CandidateMiddleName        *string `json:"candidate_middle_name,omitempty"`
	// Name of candidate running for office
	CandidateName *string `json:"candidate_name,omitempty"`
	// Federal office candidate runs for: H, S or P
	CandidateOffice *string `json:"candidate_office,omitempty"`
	// Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
	CandidateOfficeDistrict *string `json:"candidate_office_district,omitempty"`
	// US state or territory
	CandidateOfficeState *string `json:"candidate_office_state,omitempty"`
	// Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
	CandidateParty   *string           `json:"candidate_party,omitempty"`
	CandidatePrefix  *string           `json:"candidate_prefix,omitempty"`
	CandidateSuffix  *string           `json:"candidate_suffix,omitempty"`
	CategoryCode     *string           `json:"category_code,omitempty"`
	CategoryCodeFull *string           `json:"category_code_full,omitempty"`
	Committee        *CommitteeHistory `json:"committee,omitempty"`
	// A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
	//
	CommitteeID             *string     `json:"committee_id,omitempty"`
	ConduitCommitteeCity    *string     `json:"conduit_committee_city,omitempty"`
	ConduitCommitteeID      *string     `json:"conduit_committee_id,omitempty"`
	ConduitCommitteeName    *string     `json:"conduit_committee_name,omitempty"`
	ConduitCommitteeState   *string     `json:"conduit_committee_state,omitempty"`
	ConduitCommitteeStreet1 *string     `json:"conduit_committee_street1,omitempty"`
	ConduitCommitteeStreet2 *string     `json:"conduit_committee_street2,omitempty"`
	ConduitCommitteeZip     *int        `json:"conduit_committee_zip,omitempty"`
	DisseminationDate       *types.Date `json:"dissemination_date,omitempty"`
	// Election type
	// Convention, Primary,
	// General, Special,
	// Runoff etc.
	//
	ElectionType *string `json:"election_type,omitempty"`
	// Election type
	// Convention, Primary,
	// General, Special,
	// Runoff etc.
	//
	ElectionTypeFull       *string     `json:"election_type_full,omitempty"`
	ExpenditureAmount      *float64    `json:"expenditure_amount,omitempty"`
	ExpenditureDate        *types.Date `json:"expenditure_date,omitempty"`
	ExpenditureDescription *string     `json:"expenditure_description,omitempty"`
	FileNumber             *int        `json:"file_number,omitempty"`
	FilerFirstName         *string     `json:"filer_first_name,omitempty"`
	FilerLastName          *string     `json:"filer_last_name,omitempty"`
	FilerMiddleName        *string     `json:"filer_middle_name,omitempty"`
	FilerPrefix            *string     `json:"filer_prefix,omitempty"`
	FilerSuffix            *string     `json:"filer_suffix,omitempty"`
	FilingDate             *types.Date `json:"filing_date,omitempty"`
	FilingForm             *string     `json:"filing_form,omitempty"`
	ImageNumber            *string     `json:"image_number,omitempty"`
	IndependentSignDate    *types.Date `json:"independent_sign_date,omitempty"`
	IndependentSignName    *string     `json:"independent_sign_name,omitempty"`
	IsNotice               *bool       `json:"is_notice,omitempty"`
	LineNumber             *string     `json:"line_number,omitempty"`
	LinkID                 *int        `json:"link_id,omitempty"`
	MemoCode               *string     `json:"memo_code,omitempty"`
	MemoCodeFull           *string     `json:"memo_code_full,omitempty"`
	MemoText               *string     `json:"memo_text,omitempty"`
	MemoedSubtotal         *bool       `json:"memoed_subtotal,omitempty"`
	// Report is either new or is the most-recently filed amendment
	//
	MostRecent                     *bool       `json:"most_recent,omitempty"`
	NotaryCommissionExpirationDate *types.Date `json:"notary_commission_expiration_date,omitempty"`
	NotarySignDate                 *types.Date `json:"notary_sign_date,omitempty"`
	NotarySignName                 *string     `json:"notary_sign_name,omitempty"`
	OfficeTotalYtd                 *float64    `json:"office_total_ytd,omitempty"`
	OriginalSubID                  *string     `json:"original_sub_id,omitempty"`
	PayeeCity                      *string     `json:"payee_city,omitempty"`
	PayeeFirstName                 *string     `json:"payee_first_name,omitempty"`
	PayeeLastName                  *string     `json:"payee_last_name,omitempty"`
	PayeeMiddleName                *string     `json:"payee_middle_name,omitempty"`
	PayeeName                      *string     `json:"payee_name,omitempty"`
	PayeePrefix                    *string     `json:"payee_prefix,omitempty"`
	PayeeState                     *string     `json:"payee_state,omitempty"`
	PayeeStreet1                   *string     `json:"payee_street_1,omitempty"`
	PayeeStreet2                   *string     `json:"payee_street_2,omitempty"`
	PayeeSuffix                    *string     `json:"payee_suffix,omitempty"`
	PayeeZip                       *string     `json:"payee_zip,omitempty"`
	PdfURL                         *string     `json:"pdf_url,omitempty"`
	PreviousFileNumber             *int        `json:"previous_file_number,omitempty"`
	// Name of report where the underlying data comes from:
	//     - 10D Pre-Election
	//     - 10G Pre-General
	//     - 10P Pre-Primary
	//     - 10R Pre-Run-Off
	//     - 10S Pre-Special
	//     - 12C Pre-Convention
	//     - 12G Pre-General
	//     - 12P Pre-Primary
	//     - 12R Pre-Run-Off
	//     - 12S Pre-Special
	//     - 30D Post-Election
	//     - 30G Post-General
	//     - 30P Post-Primary
	//     - 30R Post-Run-Off
	//     - 30S Post-Special
	//     - 60D Post-Convention
	//     - M1  January Monthly
	//     - M10 October Monthly
	//     - M11 November Monthly
	//     - M12 December Monthly
	//     - M2  February Monthly
	//     - M3  March Monthly
	//     - M4  April Monthly
	//     - M5  May Monthly
	//     - M6  June Monthly
	//     - M7  July Monthly
	//     - M8  August Monthly
	//     - M9  September Monthly
	//     - MY  Mid-Year Report
	//     - Q1  April Quarterly
	//     - Q2  July Quarterly
	//     - Q3  October Quarterly
	//     - TER Termination Report
	//     - YE  Year-End
	//     - ADJ COMP ADJUST AMEND
	//     - CA  COMPREHENSIVE AMEND
	//     - 90S Post Inaugural Supplement
	//     - 90D Post Inaugural
	//     - 48  48 Hour Notification
	//     - 24  24 Hour Notification
	//     - M7S July Monthly/Semi-Annual
	//     - MSA Monthly Semi-Annual (MY)
	//     - MYS Monthly Year End/Semi-Annual
	//     - Q2S July Quarterly/Semi-Annual
	//     - QSA Quarterly Semi-Annual (MY)
	//     - QYS Quarterly Year End/Semi-Annual
	//     - QYE Quarterly Semi-Annual (YE)
	//     - QMS Quarterly Mid-Year/ Semi-Annual
	//     - MSY Monthly Semi-Annual (YE)
	//
	ReportType *string `json:"report_type,omitempty"`
	// Forms with coverage date -
	//     year from the coverage ending date.
	// Forms without coverage date -
	//     year from the receipt date.
	//
	ReportYear             *int    `json:"report_year,omitempty"`
	ScheduleType           *string `json:"schedule_type,omitempty"`
	ScheduleTypeFull       *string `json:"schedule_type_full,omitempty"`
	SubID                  *string `json:"sub_id,omitempty"`
	SupportOpposeIndicator *string `json:"support_oppose_indicator,omitempty"`
	TransactionID          *string `json:"transaction_id,omitempty"`
}
