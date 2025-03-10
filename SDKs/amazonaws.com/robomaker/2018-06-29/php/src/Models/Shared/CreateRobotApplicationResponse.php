<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateRobotApplicationResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateRobotApplicationResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('arn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $arn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('environment')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Environment')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Environment $environment = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('lastUpdatedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $lastUpdatedAt = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('revisionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $revisionId = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('robotSoftwareSuite')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\RobotSoftwareSuite')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?RobotSoftwareSuite $robotSoftwareSuite = null;
    
    /**
     * $sources
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Source> $sources
     */
	#[\JMS\Serializer\Annotation\SerializedName('sources')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Source>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $sources = null;
    
    /**
     * $tags
     * 
     * @var ?array<string, string> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('tags')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tags = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('version')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $version = null;
    
	public function __construct()
	{
		$this->arn = null;
		$this->environment = null;
		$this->lastUpdatedAt = null;
		$this->name = null;
		$this->revisionId = null;
		$this->robotSoftwareSuite = null;
		$this->sources = null;
		$this->tags = null;
		$this->version = null;
	}
}
