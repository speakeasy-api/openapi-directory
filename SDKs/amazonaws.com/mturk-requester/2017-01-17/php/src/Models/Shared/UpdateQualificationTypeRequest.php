<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class UpdateQualificationTypeRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('AnswerKey')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $answerKey = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('AutoGranted')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $autoGranted = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('AutoGrantedValue')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $autoGrantedValue = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('QualificationTypeId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $qualificationTypeId;
    
	#[\JMS\Serializer\Annotation\SerializedName('QualificationTypeStatus')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\QualificationTypeStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?QualificationTypeStatusEnum $qualificationTypeStatus = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('RetryDelayInSeconds')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $retryDelayInSeconds = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Test')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $test = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('TestDurationInSeconds')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $testDurationInSeconds = null;
    
	public function __construct()
	{
		$this->answerKey = null;
		$this->autoGranted = null;
		$this->autoGrantedValue = null;
		$this->description = null;
		$this->qualificationTypeId = "";
		$this->qualificationTypeStatus = null;
		$this->retryDelayInSeconds = null;
		$this->test = null;
		$this->testDurationInSeconds = null;
	}
}
