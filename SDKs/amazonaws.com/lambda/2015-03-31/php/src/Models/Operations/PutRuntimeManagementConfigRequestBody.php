<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PutRuntimeManagementConfigRequestBody
{
    /**
     * <p>The ARN of the runtime version you want the function to use.</p> <note> <p>This is only required if you're using the <b>Manual</b> runtime update mode.</p> </note>
     * 
     * @var ?string $runtimeVersionArn
     */
	#[\JMS\Serializer\Annotation\SerializedName('RuntimeVersionArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $runtimeVersionArn = null;
    
    /**
     * <p>Specify the runtime update mode.</p> <ul> <li> <p> <b>Auto (default)</b> - Automatically update to the most recent and secure runtime version using a <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase">Two-phase runtime version rollout</a>. This is the best choice for most customers to ensure they always benefit from runtime updates.</p> </li> <li> <p> <b>Function update</b> - Lambda updates the runtime of your function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.</p> </li> <li> <p> <b>Manual</b> - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback">Roll back a runtime version</a>.</p> </li> </ul>
     * 
     * @var \OpenAPI\OpenAPI\Models\Operations\PutRuntimeManagementConfigRequestBodyUpdateRuntimeOnEnum $updateRuntimeOn
     */
	#[\JMS\Serializer\Annotation\SerializedName('UpdateRuntimeOn')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\PutRuntimeManagementConfigRequestBodyUpdateRuntimeOnEnum>')]
    public PutRuntimeManagementConfigRequestBodyUpdateRuntimeOnEnum $updateRuntimeOn;
    
	public function __construct()
	{
		$this->runtimeVersionArn = null;
		$this->updateRuntimeOn = \OpenAPI\OpenAPI\Models\Operations\PutRuntimeManagementConfigRequestBodyUpdateRuntimeOnEnum::AUTO;
	}
}
