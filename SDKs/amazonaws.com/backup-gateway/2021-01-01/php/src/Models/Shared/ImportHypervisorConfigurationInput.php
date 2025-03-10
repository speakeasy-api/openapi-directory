<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class ImportHypervisorConfigurationInput
{
	#[\JMS\Serializer\Annotation\SerializedName('Host')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $host;
    
	#[\JMS\Serializer\Annotation\SerializedName('KmsKeyArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kmsKeyArn = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('Password')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $password = null;
    
    /**
     * $tags
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Tag> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('Tags')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Tag>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tags = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Username')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $username = null;
    
	public function __construct()
	{
		$this->host = "";
		$this->kmsKeyArn = null;
		$this->name = "";
		$this->password = null;
		$this->tags = null;
		$this->username = null;
	}
}
