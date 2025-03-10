<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PlayMediaIntentHandlingResolveResumePlaybackInvocationResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('debug')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $debug = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('method')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $method;
    
	#[\JMS\Serializer\Annotation\SerializedName('metrics')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ExecutionMetrics')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ExecutionMetrics $metrics = null;
    
    /**
     * $result
     * 
     * @var array<string, mixed> $result
     */
	#[\JMS\Serializer\Annotation\SerializedName('result')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    public array $result;
    
	public function __construct()
	{
		$this->debug = null;
		$this->method = "";
		$this->metrics = null;
		$this->result = [];
	}
}
