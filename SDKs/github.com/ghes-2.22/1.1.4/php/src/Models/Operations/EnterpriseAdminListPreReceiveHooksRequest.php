<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class EnterpriseAdminListPreReceiveHooksRequest
{
    /**
     * One of `asc` (ascending) or `desc` (descending).
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DirectionEnum $direction
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=direction')]
    public ?\OpenAPI\OpenAPI\Models\Shared\DirectionEnum $direction = null;
    
    /**
     * Page number of the results to fetch.
     * 
     * @var ?int $page
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=page')]
    public ?int $page = null;
    
    /**
     * Results per page (max 100)
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
    /**
     * One of `created` (when the repository was starred) or `updated` (when it was last pushed to) or `name`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\EnterpriseAdminListPreReceiveHooksSortEnum $sort
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort')]
    public ?EnterpriseAdminListPreReceiveHooksSortEnum $sort = null;
    
	public function __construct()
	{
		$this->direction = null;
		$this->page = null;
		$this->perPage = null;
		$this->sort = null;
	}
}
