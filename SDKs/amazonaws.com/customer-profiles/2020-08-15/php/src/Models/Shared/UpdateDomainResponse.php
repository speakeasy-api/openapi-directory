<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * UpdateDomainResponse - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class UpdateDomainResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('CreatedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $createdAt;
    
	#[\JMS\Serializer\Annotation\SerializedName('DeadLetterQueueUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $deadLetterQueueUrl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DefaultEncryptionKey')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $defaultEncryptionKey = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DefaultExpirationDays')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $defaultExpirationDays = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('DomainName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $domainName;
    
	#[\JMS\Serializer\Annotation\SerializedName('LastUpdatedAt')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $lastUpdatedAt;
    
	#[\JMS\Serializer\Annotation\SerializedName('Matching')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\MatchingResponse')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?MatchingResponse $matching = null;
    
    /**
     * $tags
     * 
     * @var ?array<string, string> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('Tags')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tags = null;
    
	public function __construct()
	{
		$this->createdAt = new \DateTime();
		$this->deadLetterQueueUrl = null;
		$this->defaultEncryptionKey = null;
		$this->defaultExpirationDays = null;
		$this->domainName = "";
		$this->lastUpdatedAt = new \DateTime();
		$this->matching = null;
		$this->tags = null;
	}
}
