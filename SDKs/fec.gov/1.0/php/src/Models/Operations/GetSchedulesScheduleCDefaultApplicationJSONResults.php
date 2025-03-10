<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetSchedulesScheduleCDefaultApplicationJSONResults
{
	#[\JMS\Serializer\Annotation\SerializedName('action_code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $actionCode = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('action_code_full')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $actionCodeFull = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('candidate_first_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateFirstName = null;
    
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
    
	#[\JMS\Serializer\Annotation\SerializedName('candidate_last_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateLastName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('candidate_middle_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateMiddleName = null;
    
    /**
     * Name of candidate running for office
     * 
     * @var ?string $candidateName
     */
	#[\JMS\Serializer\Annotation\SerializedName('candidate_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('candidate_office')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateOffice = null;
    
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     * 
     * @var ?string $candidateOfficeDistrict
     */
	#[\JMS\Serializer\Annotation\SerializedName('candidate_office_district')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateOfficeDistrict = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('candidate_office_full')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateOfficeFull = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('candidate_office_state')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateOfficeState = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('candidate_office_state_full')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateOfficeStateFull = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('candidate_prefix')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidatePrefix = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('candidate_suffix')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $candidateSuffix = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('committee')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CommitteeHistory')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\CommitteeHistory $committee = null;
    
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
    
	#[\JMS\Serializer\Annotation\SerializedName('cycle')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $cycle = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('due_date_terms')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $dueDateTerms = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('election_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $electionType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('election_type_full')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $electionTypeFull = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('entity_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $entityType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('entity_type_full')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $entityTypeFull = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('fec_committee_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $fecCommitteeId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('fec_election_type_full')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $fecElectionTypeFull = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('fec_election_type_year')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $fecElectionTypeYear = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('file_number')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $fileNumber = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('filing_form')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $filingForm = null;
    
    /**
     * 
     * An unique identifier for each page where the electronic or paper filing is reported.
     * 
     * 
     * @var ?string $imageNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('image_number')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $imageNumber = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('incurred_date')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $incurredDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('interest_rate_terms')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $interestRateTerms = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('line_number')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $lineNumber = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('link_id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $linkId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('load_date')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $loadDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loan_balance')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $loanBalance = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loan_source_city')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $loanSourceCity = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loan_source_first_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $loanSourceFirstName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loan_source_last_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $loanSourceLastName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loan_source_middle_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $loanSourceMiddleName = null;
    
    /**
     * Source of the loan (i.e., bank loan, brokerage account, credit card, home equity line of credit,               other line of credit, or personal funds of the candidate
     * 
     * @var ?string $loanSourceName
     */
	#[\JMS\Serializer\Annotation\SerializedName('loan_source_name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $loanSourceName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loan_source_prefix')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $loanSourcePrefix = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loan_source_state')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $loanSourceState = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loan_source_street_1')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $loanSourceStreet1 = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loan_source_street_2')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $loanSourceStreet2 = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loan_source_suffix')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $loanSourceSuffix = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('loan_source_zip')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $loanSourceZip = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('memo_code')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $memoCode = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('memo_text')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $memoText = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('original_loan_amount')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $originalLoanAmount = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('original_sub_id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $originalSubId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('payment_to_date')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $paymentToDate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('pdf_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $pdfUrl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('personally_funded')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $personallyFunded = null;
    
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
    
	#[\JMS\Serializer\Annotation\SerializedName('schedule_a_line_number')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $scheduleALineNumber = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('schedule_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $scheduleType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('schedule_type_full')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $scheduleTypeFull = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('secured_ind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $securedInd = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('sub_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $subId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('transaction_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $transactionId = null;
    
	public function __construct()
	{
		$this->actionCode = null;
		$this->actionCodeFull = null;
		$this->candidateFirstName = null;
		$this->candidateId = null;
		$this->candidateLastName = null;
		$this->candidateMiddleName = null;
		$this->candidateName = null;
		$this->candidateOffice = null;
		$this->candidateOfficeDistrict = null;
		$this->candidateOfficeFull = null;
		$this->candidateOfficeState = null;
		$this->candidateOfficeStateFull = null;
		$this->candidatePrefix = null;
		$this->candidateSuffix = null;
		$this->committee = null;
		$this->committeeId = null;
		$this->cycle = null;
		$this->dueDateTerms = null;
		$this->electionType = null;
		$this->electionTypeFull = null;
		$this->entityType = null;
		$this->entityTypeFull = null;
		$this->fecCommitteeId = null;
		$this->fecElectionTypeFull = null;
		$this->fecElectionTypeYear = null;
		$this->fileNumber = null;
		$this->filingForm = null;
		$this->imageNumber = null;
		$this->incurredDate = null;
		$this->interestRateTerms = null;
		$this->lineNumber = null;
		$this->linkId = null;
		$this->loadDate = null;
		$this->loanBalance = null;
		$this->loanSourceCity = null;
		$this->loanSourceFirstName = null;
		$this->loanSourceLastName = null;
		$this->loanSourceMiddleName = null;
		$this->loanSourceName = null;
		$this->loanSourcePrefix = null;
		$this->loanSourceState = null;
		$this->loanSourceStreet1 = null;
		$this->loanSourceStreet2 = null;
		$this->loanSourceSuffix = null;
		$this->loanSourceZip = null;
		$this->memoCode = null;
		$this->memoText = null;
		$this->originalLoanAmount = null;
		$this->originalSubId = null;
		$this->paymentToDate = null;
		$this->pdfUrl = null;
		$this->personallyFunded = null;
		$this->reportType = null;
		$this->reportYear = null;
		$this->scheduleALineNumber = null;
		$this->scheduleType = null;
		$this->scheduleTypeFull = null;
		$this->securedInd = null;
		$this->subId = null;
		$this->transactionId = null;
	}
}
