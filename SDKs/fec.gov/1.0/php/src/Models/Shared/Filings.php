<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class Filings
{
    /**
     * 
     * Additional banks or depositories in which the committee deposits funds, holds accounts, rents safety deposit boxes or maintains funds.
     * 
     * 
     * @var ?array<string> $additionalBankNames
     */
	#[\JMS\Serializer\Annotation\SerializedName('additional_bank_names')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $additionalBankNames = null;
    
    /**
     * 
     * The first value in the chain is the original filing.  The ordering in the chain reflects the order the
     * amendments were filed up to the amendment being inspected.
     * 
     * 
     * @var ?array<float> $amendmentChain
     */
	#[\JMS\Serializer\Annotation\SerializedName('amendment_chain')]
    #[\JMS\Serializer\Annotation\Type('array<float>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $amendmentChain = null;
    
    /**
     * 
     * The first value in the chain is the original filing.  The ordering in the chain reflects the order the
     * amendments were filed up to the amendment being inspected.
     * 
     * 
     * @var ?string $amendmentIndicator
     */
	#[\JMS\Serializer\Annotation\SerializedName('amendment_indicator')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $amendmentIndicator = null;
    
    /**
     * 
     * Amendment version
     * 
     * 
     * @var ?int $amendmentVersion
     */
	#[\JMS\Serializer\Annotation\SerializedName('amendment_version')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $amendmentVersion = null;
    
    /**
     * 
     * City of bank or depository as reported on the Form 1
     * 
     * 
     * @var ?string $bankDepositoryCity
     */
	#[\JMS\Serializer\Annotation\SerializedName('bank_depository_city')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bankDepositoryCity = null;
    
    /**
     * 
     * Primary bank or depository in which the committee deposits funds,holds accounts, rents safety deposit boxes or maintains funds.
     * 
     * 
     * @var ?string $bankDepositoryName
     */
	#[\JMS\Serializer\Annotation\SerializedName('bank_depository_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bankDepositoryName = null;
    
    /**
     * 
     * State of bank or depository as reported on the Form 1
     * 
     * 
     * @var ?string $bankDepositoryState
     */
	#[\JMS\Serializer\Annotation\SerializedName('bank_depository_state')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bankDepositoryState = null;
    
    /**
     * 
     * Street of bank or depository as reported on their Form 1.
     * 
     * 
     * @var ?string $bankDepositoryStreet1
     */
	#[\JMS\Serializer\Annotation\SerializedName('bank_depository_street_1')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bankDepositoryStreet1 = null;
    
    /**
     * 
     * Second line of the street of bank or depository as reported on the Form 1
     * 
     * 
     * @var ?string $bankDepositoryStreet2
     */
	#[\JMS\Serializer\Annotation\SerializedName('bank_depository_street_2')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bankDepositoryStreet2 = null;
    
    /**
     * 
     * Zip code of bank or depository as reported on the Form 1
     * 
     * 
     * @var ?string $bankDepositoryZip
     */
	#[\JMS\Serializer\Annotation\SerializedName('bank_depository_zip')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bankDepositoryZip = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('beginning_image_number')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $beginningImageNumber = null;
    
    /**
     * 
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     * First character indicates office - [P]residential, [H]ouse, [S]enate].
     * Second character is the last digit of the two-year period the ID was created.
     * Third and fourth is the candidate state. Presidential IDs don't have state.
     * Fifth and sixth is the district when the candidate first ran. This does not change if the
     * candidate/member's district changes during re-districting. Presidential IDs don't have districts.
     * The rest is sequence.
     * 
     * 
     * @var ?string $candidateId
     */
	#[\JMS\Serializer\Annotation\SerializedName('candidate_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateId = null;
    
    /**
     * Name of candidate running for office
     * 
     * @var ?string $candidateName
     */
	#[\JMS\Serializer\Annotation\SerializedName('candidate_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateName = null;
    
    /**
     * Balance for the committee at the start of the two-year period
     * 
     * @var ?float $cashOnHandBeginningPeriod
     */
	#[\JMS\Serializer\Annotation\SerializedName('cash_on_hand_beginning_period')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $cashOnHandBeginningPeriod = null;
    
    /**
     * Ending cash balance on the most recent filing
     * 
     * @var ?float $cashOnHandEndPeriod
     */
	#[\JMS\Serializer\Annotation\SerializedName('cash_on_hand_end_period')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $cashOnHandEndPeriod = null;
    
    /**
     * 
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     * 
     * 
     * @var ?string $committeeId
     */
	#[\JMS\Serializer\Annotation\SerializedName('committee_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $committeeId = null;
    
    /**
     * The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
     * 
     * @var ?string $committeeName
     */
	#[\JMS\Serializer\Annotation\SerializedName('committee_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $committeeName = null;
    
    /**
     * The one-letter type code of the organization:
     * 
     *         - C communication cost
     *         - D delegate
     *         - E electioneering communication
     *         - H House
     *         - I independent expenditure filer (not a committee)
     *         - N PAC - nonqualified
     *         - O independent expenditure-only (super PACs)
     *         - P presidential
     *         - Q PAC - qualified
     *         - S Senate
     *         - U single candidate independent expenditure
     *         - V PAC with non-contribution account, nonqualified
     *         - W PAC with non-contribution account, qualified
     *         - X party, nonqualified
     *         - Y party, qualified
     *         - Z national party non-federal account
     * 
     * 
     * @var ?string $committeeType
     */
	#[\JMS\Serializer\Annotation\SerializedName('committee_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $committeeType = null;
    
    /**
     * Ending date of the reporting period
     * 
     * @var ?\DateTime $coverageEndDate
     */
	#[\JMS\Serializer\Annotation\SerializedName('coverage_end_date')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $coverageEndDate = null;
    
    /**
     * Beginning date of the reporting period
     * 
     * @var ?\DateTime $coverageStartDate
     */
	#[\JMS\Serializer\Annotation\SerializedName('coverage_start_date')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $coverageStartDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('csv_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $csvUrl = null;
    
    /**
     * 
     * Filter records to only those that were applicable to a given
     * two-year period.The cycle begins with an odd year and is named
     * for its ending, even year.
     * 
     * 
     * @var ?int $cycle
     */
	#[\JMS\Serializer\Annotation\SerializedName('cycle')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $cycle = null;
    
    /**
     * Debts owed by the committee
     * 
     * @var ?float $debtsOwedByCommittee
     */
	#[\JMS\Serializer\Annotation\SerializedName('debts_owed_by_committee')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $debtsOwedByCommittee = null;
    
    /**
     * Debts owed to the committee
     * 
     * @var ?float $debtsOwedToCommittee
     */
	#[\JMS\Serializer\Annotation\SerializedName('debts_owed_to_committee')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $debtsOwedToCommittee = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('document_description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $documentDescription = null;
    
    /**
     * 
     * The type of document for documents other than reports:
     *     - 2 24 Hour Contribution Notice
     *     - 4 48 Hour Contribution Notice
     *     - A Debt Settlement Statement
     *     - B Acknowledgment of Receipt of Debt Settlement Statement
     *     - C RFAI: Debt Settlement First Notice
     *     - D Commission Debt Settlement Review
     *     - E Commission Response TO Debt Settlement Request
     *     - F Administrative Termination
     *     - G Debt Settlement Plan Amendment
     *     - H Disavowal Notice
     *     - I Disavowal Response
     *     - J Conduit Report
     *     - K Termination Approval
     *     - L Repeat Non-Filer Notice
     *     - M Filing Frequency Change Notice
     *     - N Paper Amendment to Electronic Report
     *     - O Acknowledgment of Filing Frequency Change
     *     - S RFAI: Debt Settlement Second
     *     - T Miscellaneous Report TO FEC
     *     - V Repeat Violation Notice (441A OR 441B)
     *     - P Notice of Paper Filing
     *     - R F3L Filing Frequency Change Notice
     *     - Q Acknowledgment of F3L Filing Frequency Change
     *     - U Unregistered Committee Notice
     * 
     * 
     * @var ?string $documentType
     */
	#[\JMS\Serializer\Annotation\SerializedName('document_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $documentType = null;
    
    /**
     * 
     * The type of document for documents other than reports:
     *     - 2 24 Hour Contribution Notice
     *     - 4 48 Hour Contribution Notice
     *     - A Debt Settlement Statement
     *     - B Acknowledgment of Receipt of Debt Settlement Statement
     *     - C RFAI: Debt Settlement First Notice
     *     - D Commission Debt Settlement Review
     *     - E Commission Response TO Debt Settlement Request
     *     - F Administrative Termination
     *     - G Debt Settlement Plan Amendment
     *     - H Disavowal Notice
     *     - I Disavowal Response
     *     - J Conduit Report
     *     - K Termination Approval
     *     - L Repeat Non-Filer Notice
     *     - M Filing Frequency Change Notice
     *     - N Paper Amendment to Electronic Report
     *     - O Acknowledgment of Filing Frequency Change
     *     - S RFAI: Debt Settlement Second
     *     - T Miscellaneous Report TO FEC
     *     - V Repeat Violation Notice (441A OR 441B)
     *     - P Notice of Paper Filing
     *     - R F3L Filing Frequency Change Notice
     *     - Q Acknowledgment of F3L Filing Frequency Change
     *     - U Unregistered Committee Notice
     * 
     * 
     * @var ?string $documentTypeFull
     */
	#[\JMS\Serializer\Annotation\SerializedName('document_type_full')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $documentTypeFull = null;
    
    /**
     * Year of election
     * 
     * @var ?int $electionYear
     */
	#[\JMS\Serializer\Annotation\SerializedName('election_year')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $electionYear = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ending_image_number')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $endingImageNumber = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('fec_file_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $fecFileId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('fec_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $fecUrl = null;
    
    /**
     * Filing ID number
     * 
     * @var ?int $fileNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('file_number')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $fileNumber = null;
    
    /**
     * 
     * The forms filed are categorized based on the nature of the filing:
     *     - REPORT F3, F3X, F3P, F3L, F4, F5, F7, F13
     *     - NOTICE F5, F24, F6, F9, F10, F11
     *     - STATEMENT F1, F2
     *     - OTHER F1M, F8, F99, F12, FRQ
     * 
     * 
     * @var ?string $formCategory
     */
	#[\JMS\Serializer\Annotation\SerializedName('form_category')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $formCategory = null;
    
    /**
     * The form where the underlying data comes from, for example, Form 1 would appear as F1:
     * 
     *     - F1   Statement of Organization
     *     - F1M  Notification of Multicandidate Status
     *     - F2   Statement of Candidacy
     *     - F3   Report of Receipts and Disbursements for an Authorized Committee
     *     - F3P  Report of Receipts and Disbursements by an Authorized Committee of a Candidate for     The Office of President or Vice President
     *     - F3L  Report of Contributions Bundled by Lobbyists/Registrants and Lobbyist/Registrant PACs
     *     - F3X  Report of Receipts and Disbursements for other than an Authorized Committee
     *     - F4   Report of Receipts and Disbursements for a Committee or Organization Supporting a Nomination Convention
     *     - F5   Report of Independent Expenditures Made and Contributions Received
     *     - F6   48 Hour Notice of Contributions/Loans Received
     *     - F7   Report of Communication Costs by Corporations and Membership Organizations
     *     - F8   Debt Settlement Plan
     *     - F9   24 Hour Notice of Disbursements for Electioneering Communications
     *     - F13  Report of Donations Accepted for Inaugural Committee
     *     - F99  Miscellaneous Text
     *     - FRQ  Request for Additional Information
     * 
     * 
     * @var ?string $formType
     */
	#[\JMS\Serializer\Annotation\SerializedName('form_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $formType = null;
    
    /**
     * House personal funds
     * 
     * @var ?float $housePersonalFunds
     */
	#[\JMS\Serializer\Annotation\SerializedName('house_personal_funds')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $housePersonalFunds = null;
    
    /**
     * 
     * HTML link to the filing.
     * 
     * 
     * @var ?string $htmlUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('html_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $htmlUrl = null;
    
    /**
     * 
     * False indicates that a report is the most recent. True indicates that the report has been superseded by an amendment.
     * 
     * 
     * @var ?bool $isAmended
     */
	#[\JMS\Serializer\Annotation\SerializedName('is_amended')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isAmended = null;
    
    /**
     * The method used to file with the FEC, either electronic or on paper.
     * 
     * @var ?string $meansFiled
     */
	#[\JMS\Serializer\Annotation\SerializedName('means_filed')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $meansFiled = null;
    
    /**
     * 
     * Report is either new or is the most-recently filed amendment
     * 
     * 
     * @var ?bool $mostRecent
     */
	#[\JMS\Serializer\Annotation\SerializedName('most_recent')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $mostRecent = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('most_recent_file_number')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $mostRecentFileNumber = null;
    
    /**
     * Net donations
     * 
     * @var ?float $netDonations
     */
	#[\JMS\Serializer\Annotation\SerializedName('net_donations')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $netDonations = null;
    
    /**
     * Federal office candidate runs for: H, S or P
     * 
     * @var ?string $office
     */
	#[\JMS\Serializer\Annotation\SerializedName('office')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $office = null;
    
    /**
     * Opposition personal funds
     * 
     * @var ?float $oppositionPersonalFunds
     */
	#[\JMS\Serializer\Annotation\SerializedName('opposition_personal_funds')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $oppositionPersonalFunds = null;
    
    /**
     * 
     * Number of pages in the document
     * 
     * 
     * @var ?int $pages
     */
	#[\JMS\Serializer\Annotation\SerializedName('pages')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $pages = null;
    
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     * 
     * @var ?string $party
     */
	#[\JMS\Serializer\Annotation\SerializedName('party')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $party = null;
    
    /**
     * 
     * pdf link to the filing
     * 
     * 
     * @var ?string $pdfUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('pdf_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $pdfUrl = null;
    
    /**
     * 
     * Previous filing ID number
     * 
     * 
     * @var ?int $previousFileNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('previous_file_number')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $previousFileNumber = null;
    
    /**
     * 
     * Primary general indicator
     * 
     * 
     * @var ?string $primaryGeneralIndicator
     */
	#[\JMS\Serializer\Annotation\SerializedName('primary_general_indicator')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $primaryGeneralIndicator = null;
    
    /**
     * Date the FEC received the electronic or paper record
     * 
     * @var ?\DateTime $receiptDate
     */
	#[\JMS\Serializer\Annotation\SerializedName('receipt_date')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $receiptDate = null;
    
    /**
     * Name of report where the underlying data comes from:
     * 
     *     - 10D Pre-Election
     *     - 10G Pre-General
     *     - 10P Pre-Primary
     *     - 10R Pre-Run-Off
     *     - 10S Pre-Special
     *     - 12C Pre-Convention
     *     - 12G Pre-General
     *     - 12P Pre-Primary
     *     - 12R Pre-Run-Off
     *     - 12S Pre-Special
     *     - 30D Post-Election
     *     - 30G Post-General
     *     - 30P Post-Primary
     *     - 30R Post-Run-Off
     *     - 30S Post-Special
     *     - 60D Post-Convention
     *     - M1  January Monthly
     *     - M10 October Monthly
     *     - M11 November Monthly
     *     - M12 December Monthly
     *     - M2  February Monthly
     *     - M3  March Monthly
     *     - M4  April Monthly
     *     - M5  May Monthly
     *     - M6  June Monthly
     *     - M7  July Monthly
     *     - M8  August Monthly
     *     - M9  September Monthly
     *     - MY  Mid-Year Report
     *     - Q1  April Quarterly
     *     - Q2  July Quarterly
     *     - Q3  October Quarterly
     *     - TER Termination Report
     *     - YE  Year-End
     *     - ADJ COMP ADJUST AMEND
     *     - CA  COMPREHENSIVE AMEND
     *     - 90S Post Inaugural Supplement
     *     - 90D Post Inaugural
     *     - 48  48 Hour Notification
     *     - 24  24 Hour Notification
     *     - M7S July Monthly/Semi-Annual
     *     - MSA Monthly Semi-Annual (MY)
     *     - MYS Monthly Year End/Semi-Annual
     *     - Q2S July Quarterly/Semi-Annual
     *     - QSA Quarterly Semi-Annual (MY)
     *     - QYS Quarterly Year End/Semi-Annual
     *     - QYE Quarterly Semi-Annual (YE)
     *     - QMS Quarterly Mid-Year/ Semi-Annual
     *     - MSY Monthly Semi-Annual (YE)
     * 
     * 
     * @var ?string $reportType
     */
	#[\JMS\Serializer\Annotation\SerializedName('report_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $reportType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('report_type_full')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $reportTypeFull = null;
    
    /**
     * 
     * Forms with coverage date - 
     *     year from the coverage ending date.
     * Forms without coverage date - 
     *     year from the receipt date.
     * 
     * 
     * @var ?int $reportYear
     */
	#[\JMS\Serializer\Annotation\SerializedName('report_year')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $reportYear = null;
    
    /**
     * 
     * Requests for additional information (RFAIs) sent to filers. The request type is based on the type of document filed:
     *     - 1 Statement of Organization
     *     - 2 Report of Receipts and Expenditures (Form 3 and 3X)
     *     - 3 Second Notice - Reports
     *     - 4 Request for Additional Information
     *     - 5 Informational - Reports
     *     - 6 Second Notice - Statement of Organization
     *     - 7 Failure to File
     *     - 8 From Public Disclosure
     *     - 9 From Multi Candidate Status
     * 
     * 
     * @var ?string $requestType
     */
	#[\JMS\Serializer\Annotation\SerializedName('request_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $requestType = null;
    
    /**
     * Senate personal funds
     * 
     * @var ?float $senatePersonalFunds
     */
	#[\JMS\Serializer\Annotation\SerializedName('senate_personal_funds')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $senatePersonalFunds = null;
    
    /**
     * US state or territory where a candidate runs for office
     * 
     * @var ?string $state
     */
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $state = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('sub_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $subId = null;
    
    /**
     * Total communications cost
     * 
     * @var ?float $totalCommunicationCost
     */
	#[\JMS\Serializer\Annotation\SerializedName('total_communication_cost')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $totalCommunicationCost = null;
    
    /**
     * Total disbursements
     * 
     * @var ?float $totalDisbursements
     */
	#[\JMS\Serializer\Annotation\SerializedName('total_disbursements')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $totalDisbursements = null;
    
    /**
     * Total independent expenditures
     * 
     * @var ?float $totalIndependentExpenditures
     */
	#[\JMS\Serializer\Annotation\SerializedName('total_independent_expenditures')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $totalIndependentExpenditures = null;
    
    /**
     * Total individual contributions
     * 
     * @var ?float $totalIndividualContributions
     */
	#[\JMS\Serializer\Annotation\SerializedName('total_individual_contributions')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $totalIndividualContributions = null;
    
    /**
     * Total receipts
     * 
     * @var ?float $totalReceipts
     */
	#[\JMS\Serializer\Annotation\SerializedName('total_receipts')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $totalReceipts = null;
    
    /**
     * Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
     * 
     * @var ?string $treasurerName
     */
	#[\JMS\Serializer\Annotation\SerializedName('treasurer_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $treasurerName = null;
    
    /**
     * Date the record was updated
     * 
     * @var ?\DateTime $updateDate
     */
	#[\JMS\Serializer\Annotation\SerializedName('update_date')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $updateDate = null;
    
	public function __construct()
	{
		$this->additionalBankNames = null;
		$this->amendmentChain = null;
		$this->amendmentIndicator = null;
		$this->amendmentVersion = null;
		$this->bankDepositoryCity = null;
		$this->bankDepositoryName = null;
		$this->bankDepositoryState = null;
		$this->bankDepositoryStreet1 = null;
		$this->bankDepositoryStreet2 = null;
		$this->bankDepositoryZip = null;
		$this->beginningImageNumber = null;
		$this->candidateId = null;
		$this->candidateName = null;
		$this->cashOnHandBeginningPeriod = null;
		$this->cashOnHandEndPeriod = null;
		$this->committeeId = null;
		$this->committeeName = null;
		$this->committeeType = null;
		$this->coverageEndDate = null;
		$this->coverageStartDate = null;
		$this->csvUrl = null;
		$this->cycle = null;
		$this->debtsOwedByCommittee = null;
		$this->debtsOwedToCommittee = null;
		$this->documentDescription = null;
		$this->documentType = null;
		$this->documentTypeFull = null;
		$this->electionYear = null;
		$this->endingImageNumber = null;
		$this->fecFileId = null;
		$this->fecUrl = null;
		$this->fileNumber = null;
		$this->formCategory = null;
		$this->formType = null;
		$this->housePersonalFunds = null;
		$this->htmlUrl = null;
		$this->isAmended = null;
		$this->meansFiled = null;
		$this->mostRecent = null;
		$this->mostRecentFileNumber = null;
		$this->netDonations = null;
		$this->office = null;
		$this->oppositionPersonalFunds = null;
		$this->pages = null;
		$this->party = null;
		$this->pdfUrl = null;
		$this->previousFileNumber = null;
		$this->primaryGeneralIndicator = null;
		$this->receiptDate = null;
		$this->reportType = null;
		$this->reportTypeFull = null;
		$this->reportYear = null;
		$this->requestType = null;
		$this->senatePersonalFunds = null;
		$this->state = null;
		$this->subId = null;
		$this->totalCommunicationCost = null;
		$this->totalDisbursements = null;
		$this->totalIndependentExpenditures = null;
		$this->totalIndividualContributions = null;
		$this->totalReceipts = null;
		$this->treasurerName = null;
		$this->updateDate = null;
	}
}
