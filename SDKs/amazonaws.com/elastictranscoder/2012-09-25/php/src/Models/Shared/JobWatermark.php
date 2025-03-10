<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * JobWatermark - Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class JobWatermark
{
	#[\JMS\Serializer\Annotation\SerializedName('Encryption')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Encryption')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Encryption $encryption = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('InputKey')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $inputKey = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('PresetWatermarkId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $presetWatermarkId = null;
    
	public function __construct()
	{
		$this->encryption = null;
		$this->inputKey = null;
		$this->presetWatermarkId = null;
	}
}
