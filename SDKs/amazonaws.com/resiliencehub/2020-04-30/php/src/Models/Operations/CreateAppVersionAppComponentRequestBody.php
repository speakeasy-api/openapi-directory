<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateAppVersionAppComponentRequestBody
{
    /**
     * Currently, there is no supported additional information for Application Components.
     * 
     * @var ?array<string, array<string>> $additionalInfo
     */
	#[\JMS\Serializer\Annotation\SerializedName('additionalInfo')]
    #[\JMS\Serializer\Annotation\Type('array<string, array<string>>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $additionalInfo = null;
    
    /**
     * The Amazon Resource Name (ARN) of the Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     * 
     * @var string $appArn
     */
	#[\JMS\Serializer\Annotation\SerializedName('appArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $appArn;
    
    /**
     * Used for an idempotency token. A client token is a unique, case-sensitive string of up to 64 ASCII characters. You should not reuse the same client token for other API requests.
     * 
     * @var ?string $clientToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('clientToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $clientToken = null;
    
    /**
     * The identifier of the Application Component.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * The name of the Application Component.
     * 
     * @var string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
    /**
     * The type of Application Component. For more information about the types of Application Component, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/AppComponent.grouping.html">Grouping resources in an AppComponent</a>.
     * 
     * @var string $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $type;
    
	public function __construct()
	{
		$this->additionalInfo = null;
		$this->appArn = "";
		$this->clientToken = null;
		$this->id = null;
		$this->name = "";
		$this->type = "";
	}
}
