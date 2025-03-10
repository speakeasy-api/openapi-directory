<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class BeezUPCommonErrorSummary
{
    /**
     * $errorArguments
     * 
     * @var ?array<string, string> $errorArguments
     */
	#[\JMS\Serializer\Annotation\SerializedName('errorArguments')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $errorArguments = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('errorCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $errorCode = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('errorGuid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $errorGuid = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('errorMessage')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $errorMessage = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('exceptionDetail')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\BeezUPCommonExceptionDetail')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?BeezUPCommonExceptionDetail $exceptionDetail = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('objectName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $objectName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('propertyName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $propertyName = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('propertyValue')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $propertyValue = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('source')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $source = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('technicalErrorMessage')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $technicalErrorMessage = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('utcDate')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $utcDate = null;
    
	public function __construct()
	{
		$this->errorArguments = null;
		$this->errorCode = null;
		$this->errorGuid = null;
		$this->errorMessage = null;
		$this->exceptionDetail = null;
		$this->objectName = null;
		$this->propertyName = null;
		$this->propertyValue = null;
		$this->source = null;
		$this->technicalErrorMessage = null;
		$this->utcDate = null;
	}
}
