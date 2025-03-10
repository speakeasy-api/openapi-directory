<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Statistics - A map of key-value pairs for all supported statistics. For issues with missing or unexpected values for this API, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/fleet-indexing-troubleshooting.html"> Fleet indexing troubleshooting guide</a>.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Statistics
{
	#[\JMS\Serializer\Annotation\SerializedName('average')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $average = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('count')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $count = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('maximum')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $maximum = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('minimum')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $minimum = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('stdDeviation')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $stdDeviation = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('sum')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $sum = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('sumOfSquares')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $sumOfSquares = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('variance')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $variance = null;
    
	public function __construct()
	{
		$this->average = null;
		$this->count = null;
		$this->maximum = null;
		$this->minimum = null;
		$this->stdDeviation = null;
		$this->sum = null;
		$this->sumOfSquares = null;
		$this->variance = null;
	}
}
