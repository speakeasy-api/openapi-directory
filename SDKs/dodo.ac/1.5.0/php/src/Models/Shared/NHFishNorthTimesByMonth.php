<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * NHFishNorthTimesByMonth - An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class NHFishNorthTimesByMonth
{
	#[\JMS\Serializer\Annotation\SerializedName('1')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $one = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('10')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $ten = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('11')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $eleven = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('12')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $twelve = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('2')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $two = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('3')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $three = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('4')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $four = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('5')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $five = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('6')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $six = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('7')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $seven = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('8')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $eight = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('9')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nine = null;
    
	public function __construct()
	{
		$this->one = null;
		$this->ten = null;
		$this->eleven = null;
		$this->twelve = null;
		$this->two = null;
		$this->three = null;
		$this->four = null;
		$this->five = null;
		$this->six = null;
		$this->seven = null;
		$this->eight = null;
		$this->nine = null;
	}
}
