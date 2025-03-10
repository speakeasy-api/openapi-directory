<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * UpdateInstruction - Contains the instructions for one Grafana role permission update in a <a href="https://docs.aws.amazon.com/grafana/latest/APIReference/API_UpdatePermissions.html">UpdatePermissions</a> operation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class UpdateInstruction
{
	#[\JMS\Serializer\Annotation\SerializedName('action')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\UpdateActionEnum>')]
    public UpdateActionEnum $action;
    
	#[\JMS\Serializer\Annotation\SerializedName('role')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\RoleEnum>')]
    public RoleEnum $role;
    
    /**
     * $users
     * 
     * @var array<\OpenAPI\OpenAPI\Models\Shared\User> $users
     */
	#[\JMS\Serializer\Annotation\SerializedName('users')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\User>')]
    public array $users;
    
	public function __construct()
	{
		$this->action = \OpenAPI\OpenAPI\Models\Shared\UpdateActionEnum::ADD;
		$this->role = \OpenAPI\OpenAPI\Models\Shared\RoleEnum::ADMIN;
		$this->users = [];
	}
}
