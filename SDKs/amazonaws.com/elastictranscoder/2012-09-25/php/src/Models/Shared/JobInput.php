<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * JobInput - Information about the file that you're transcoding.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class JobInput
{
	#[\JMS\Serializer\Annotation\SerializedName('AspectRatio')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $aspectRatio = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Container')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $container = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DetectedProperties')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DetectedProperties')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DetectedProperties $detectedProperties = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Encryption')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Encryption')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Encryption $encryption = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('FrameRate')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $frameRate = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('InputCaptions')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\InputCaptions')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?InputCaptions $inputCaptions = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Interlaced')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $interlaced = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Key')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $key = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Resolution')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $resolution = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TimeSpan')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TimeSpan')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TimeSpan $timeSpan = null;
    
	public function __construct()
	{
		$this->aspectRatio = null;
		$this->container = null;
		$this->detectedProperties = null;
		$this->encryption = null;
		$this->frameRate = null;
		$this->inputCaptions = null;
		$this->interlaced = null;
		$this->key = null;
		$this->resolution = null;
		$this->timeSpan = null;
	}
}
