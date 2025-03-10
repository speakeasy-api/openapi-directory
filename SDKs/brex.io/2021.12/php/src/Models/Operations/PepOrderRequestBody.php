<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
/**
 * PepOrderRequestBody - Optional parameters to enhance search
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class PepOrderRequestBody
{
    /**
     * Optional parameter for declaring alias names when doing a person search (seperated by commas)
     * 
     * @var ?string $aliases
     */
	#[SpeakeasyMetadata('form:name=Aliases')]
    public ?string $aliases = null;
    
    /**
     * Optional name of Country to assist in identifying matches based upon location/geography.
     * 
     * @var ?string $country
     */
	#[SpeakeasyMetadata('form:name=Country')]
    public ?string $country = null;
    
    /**
     * Optional parameter for date of birth name when doing a person search
     * 
     * @var ?string $dob
     */
	#[SpeakeasyMetadata('form:name=DOB')]
    public ?string $dob = null;
    
    /**
     * Optional parameter for last name when doing a person search
     * 
     * @var ?string $familyName
     */
	#[SpeakeasyMetadata('form:name=FamilyName')]
    public ?string $familyName = null;
    
    /**
     * Optional parameter for restricting search when doing a person search (seperated by commas)
     * 
     * @var ?string $filters
     */
	#[SpeakeasyMetadata('form:name=Filters')]
    public ?string $filters = null;
    
    /**
     * Optional parameter for first name when doing a person search
     * 
     * @var ?string $givenName
     */
	#[SpeakeasyMetadata('form:name=GivenName')]
    public ?string $givenName = null;
    
    /**
     * Optional Legal Entity Identifier for additional business identifier verification.
     * 
     * @var ?string $lei
     */
	#[SpeakeasyMetadata('form:name=LEI')]
    public ?string $lei = null;
    
    /**
     * Optional name of City or Locale to assist in identifying matches based upon location/geography.
     * 
     * @var ?string $locale
     */
	#[SpeakeasyMetadata('form:name=Locale')]
    public ?string $locale = null;
    
    /**
     * Optional parameter for selecting only specific media lists. By default all lists are queried
     * 
     * @var ?string $medialists
     */
	#[SpeakeasyMetadata('form:name=Medialists')]
    public ?string $medialists = null;
    
    /**
     * Optional parameter for middle name when doing a person search
     * 
     * @var ?string $middleName
     */
	#[SpeakeasyMetadata('form:name=MiddleName')]
    public ?string $middleName = null;
    
    /**
     * If this Pep Sanction Check should be continuesly monitored.
     * 
     * @var ?bool $monitoring
     */
	#[SpeakeasyMetadata('form:name=Monitoring')]
    public ?bool $monitoring = null;
    
    /**
     * Optional parameter for selecting only specific pep lists. By default all lists are queried
     * 
     * @var ?string $peplists
     */
	#[SpeakeasyMetadata('form:name=Peplists')]
    public ?string $peplists = null;
    
    /**
     * Optional name of Region or State to assist in identifying matches based upon location/geography.
     * 
     * @var ?string $region
     */
	#[SpeakeasyMetadata('form:name=Region')]
    public ?string $region = null;
    
    /**
     * Optional parameter for enabling SmartMatch to retrieve more results
     * 
     * @var ?bool $smartMatch
     */
	#[SpeakeasyMetadata('form:name=SmartMatch')]
    public ?bool $smartMatch = null;
    
    /**
     * Optional parameter for selecting only specific watch lists. By default all lists are queried
     * 
     * @var ?string $watchlists
     */
	#[SpeakeasyMetadata('form:name=Watchlists')]
    public ?string $watchlists = null;
    
    /**
     * If Monitoring is enabled this parameter is required. This is where updates will be sent to
     * 
     * @var ?string $webhook
     */
	#[SpeakeasyMetadata('form:name=Webhook')]
    public ?string $webhook = null;
    
	public function __construct()
	{
		$this->aliases = null;
		$this->country = null;
		$this->dob = null;
		$this->familyName = null;
		$this->filters = null;
		$this->givenName = null;
		$this->lei = null;
		$this->locale = null;
		$this->medialists = null;
		$this->middleName = null;
		$this->monitoring = null;
		$this->peplists = null;
		$this->region = null;
		$this->smartMatch = null;
		$this->watchlists = null;
		$this->webhook = null;
	}
}
