<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * EntityRecognizerSummary -  Describes the information about an entity recognizer and its versions.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class EntityRecognizerSummary
{
	#[\JMS\Serializer\Annotation\SerializedName('LatestVersionCreatedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $latestVersionCreatedAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LatestVersionName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $latestVersionName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('LatestVersionStatus')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\ModelStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ModelStatusEnum $latestVersionStatus = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('NumberOfVersions')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $numberOfVersions = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('RecognizerName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $recognizerName = null;
    
	public function __construct()
	{
		$this->latestVersionCreatedAt = null;
		$this->latestVersionName = null;
		$this->latestVersionStatus = null;
		$this->numberOfVersions = null;
		$this->recognizerName = null;
	}
}
