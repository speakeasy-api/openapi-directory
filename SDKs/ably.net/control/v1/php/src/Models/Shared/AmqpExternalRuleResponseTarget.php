<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class AmqpExternalRuleResponseTarget
{
	#[\JMS\Serializer\Annotation\SerializedName('enveloped')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $enveloped = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('exchange')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $exchange = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('format')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $format = null;
    
    /**
     * $headers
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AmqpExternalRuleResponseTargetHeaders> $headers
     */
	#[\JMS\Serializer\Annotation\SerializedName('headers')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AmqpExternalRuleResponseTargetHeaders>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $headers = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('mandatoryRoute')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    public bool $mandatoryRoute;
    
	#[\JMS\Serializer\Annotation\SerializedName('messageTtl')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $messageTtl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('persistentMessages')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    public bool $persistentMessages;
    
	#[\JMS\Serializer\Annotation\SerializedName('routingKey')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $routingKey;
    
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $url;
    
	public function __construct()
	{
		$this->enveloped = null;
		$this->exchange = null;
		$this->format = null;
		$this->headers = null;
		$this->mandatoryRoute = false;
		$this->messageTtl = null;
		$this->persistentMessages = false;
		$this->routingKey = "";
		$this->url = "";
	}
}
