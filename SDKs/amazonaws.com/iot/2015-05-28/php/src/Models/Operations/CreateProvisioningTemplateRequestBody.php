<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateProvisioningTemplateRequestBody
{
    /**
     * The description of the provisioning template.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * True to enable the provisioning template, otherwise false.
     * 
     * @var ?bool $enabled
     */
	#[\JMS\Serializer\Annotation\SerializedName('enabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $enabled = null;
    
    /**
     * Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CreateProvisioningTemplateRequestBodyPreProvisioningHook $preProvisioningHook
     */
	#[\JMS\Serializer\Annotation\SerializedName('preProvisioningHook')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\CreateProvisioningTemplateRequestBodyPreProvisioningHook')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CreateProvisioningTemplateRequestBodyPreProvisioningHook $preProvisioningHook = null;
    
    /**
     * The role ARN for the role associated with the provisioning template. This IoT role grants permission to provision a device.
     * 
     * @var string $provisioningRoleArn
     */
	#[\JMS\Serializer\Annotation\SerializedName('provisioningRoleArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $provisioningRoleArn;
    
    /**
     * <p>Metadata which can be used to manage the provisioning template.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: &amp;&amp;tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Tag> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('tags')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Tag>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tags = null;
    
    /**
     * The JSON formatted contents of the provisioning template.
     * 
     * @var string $templateBody
     */
	#[\JMS\Serializer\Annotation\SerializedName('templateBody')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $templateBody;
    
    /**
     * The name of the provisioning template.
     * 
     * @var string $templateName
     */
	#[\JMS\Serializer\Annotation\SerializedName('templateName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $templateName;
    
    /**
     * The type you define in a provisioning template. You can create a template with only one type. You can't change the template type after its creation. The default value is <code>FLEET_PROVISIONING</code>. For more information about provisioning template, see: <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-template.html">Provisioning template</a>. 
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CreateProvisioningTemplateRequestBodyTypeEnum $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\CreateProvisioningTemplateRequestBodyTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CreateProvisioningTemplateRequestBodyTypeEnum $type = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->enabled = null;
		$this->preProvisioningHook = null;
		$this->provisioningRoleArn = "";
		$this->tags = null;
		$this->templateBody = "";
		$this->templateName = "";
		$this->type = null;
	}
}
