<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * SegmentDetection - A technical cue or shot detection segment detected in a video. An array of <code>SegmentDetection</code> objects containing all segments detected in a stored video is returned by <a>GetSegmentDetection</a>. 
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class SegmentDetection
{
	#[\JMS\Serializer\Annotation\SerializedName('DurationFrames')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $durationFrames = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DurationMillis')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $durationMillis = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DurationSMPTE')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $durationSMPTE = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EndFrameNumber')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $endFrameNumber = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EndTimecodeSMPTE')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $endTimecodeSMPTE = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('EndTimestampMillis')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $endTimestampMillis = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('ShotSegment')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ShotSegment')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ShotSegment $shotSegment = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('StartFrameNumber')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $startFrameNumber = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('StartTimecodeSMPTE')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $startTimecodeSMPTE = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('StartTimestampMillis')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $startTimestampMillis = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TechnicalCueSegment')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TechnicalCueSegment')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TechnicalCueSegment $technicalCueSegment = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\SegmentTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SegmentTypeEnum $type = null;
    
	public function __construct()
	{
		$this->durationFrames = null;
		$this->durationMillis = null;
		$this->durationSMPTE = null;
		$this->endFrameNumber = null;
		$this->endTimecodeSMPTE = null;
		$this->endTimestampMillis = null;
		$this->shotSegment = null;
		$this->startFrameNumber = null;
		$this->startTimecodeSMPTE = null;
		$this->startTimestampMillis = null;
		$this->technicalCueSegment = null;
		$this->type = null;
	}
}
