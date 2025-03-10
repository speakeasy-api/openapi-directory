<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetDatabaseRequestBody
{
    /**
     * The ID of the application.
     * 
     * @var ?string $applicationId
     */
	#[\JMS\Serializer\Annotation\SerializedName('ApplicationId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $applicationId = null;
    
    /**
     * The ID of the component.
     * 
     * @var ?string $componentId
     */
	#[\JMS\Serializer\Annotation\SerializedName('ComponentId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $componentId = null;
    
    /**
     * The Amazon Resource Name (ARN) of the database.
     * 
     * @var ?string $databaseArn
     */
	#[\JMS\Serializer\Annotation\SerializedName('DatabaseArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $databaseArn = null;
    
    /**
     * The ID of the database.
     * 
     * @var ?string $databaseId
     */
	#[\JMS\Serializer\Annotation\SerializedName('DatabaseId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $databaseId = null;
    
	public function __construct()
	{
		$this->applicationId = null;
		$this->componentId = null;
		$this->databaseArn = null;
		$this->databaseId = null;
	}
}
