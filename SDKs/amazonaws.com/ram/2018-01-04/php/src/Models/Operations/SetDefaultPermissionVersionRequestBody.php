<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class SetDefaultPermissionVersionRequestBody
{
    /**
     * <p>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID type of value.</a>.</p> <p>If you don't provide this value, then Amazon Web Services generates a random one for you.</p> <p>If you retry the operation with the same <code>ClientToken</code>, but with different parameters, the retry fails with an <code>IdempotentParameterMismatch</code> error.</p>
     * 
     * @var ?string $clientToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('clientToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $clientToken = null;
    
    /**
     * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Name (ARN)</a> of the customer managed permission whose default version you want to change.
     * 
     * @var string $permissionArn
     */
	#[\JMS\Serializer\Annotation\SerializedName('permissionArn')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $permissionArn;
    
    /**
     * Specifies the version number that you want to designate as the default for customer managed permission. To see a list of all available version numbers, use <a>ListPermissionVersions</a>.
     * 
     * @var int $permissionVersion
     */
	#[\JMS\Serializer\Annotation\SerializedName('permissionVersion')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $permissionVersion;
    
	public function __construct()
	{
		$this->clientToken = null;
		$this->permissionArn = "";
		$this->permissionVersion = 0;
	}
}
