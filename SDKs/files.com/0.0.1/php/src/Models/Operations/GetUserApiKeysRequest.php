<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetUserApiKeysRequest
{
    /**
     * Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
     * 
     * @var ?string $cursor
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=cursor')]
    public ?string $cursor = null;
    
    /**
     * If set, return records where the specified field is equal to the supplied value. Valid fields are `expires_at`.
     * 
     * @var ?array<string, mixed> $filter
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filter')]
    public ?array $filter = null;
    
    /**
     * If set, return records where the specified field is greater than the supplied value. Valid fields are `expires_at`.
     * 
     * @var ?array<string, mixed> $filterGt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filter_gt')]
    public ?array $filterGt = null;
    
    /**
     * If set, return records where the specified field is greater than or equal the supplied value. Valid fields are `expires_at`.
     * 
     * @var ?array<string, mixed> $filterGteq
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filter_gteq')]
    public ?array $filterGteq = null;
    
    /**
     * If set, return records where the specified field is less than the supplied value. Valid fields are `expires_at`.
     * 
     * @var ?array<string, mixed> $filterLt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filter_lt')]
    public ?array $filterLt = null;
    
    /**
     * If set, return records where the specified field is less than or equal the supplied value. Valid fields are `expires_at`.
     * 
     * @var ?array<string, mixed> $filterLteq
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=filter_lteq')]
    public ?array $filterLteq = null;
    
    /**
     * Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=per_page')]
    public ?int $perPage = null;
    
    /**
     * If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[expires_at]=desc`). Valid fields are `expires_at`.
     * 
     * @var ?array<string, mixed> $sortBy
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=sort_by')]
    public ?array $sortBy = null;
    
    /**
     * User ID.  Provide a value of `0` to operate the current session's user.
     * 
     * @var ?int $userId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=user_id')]
    public ?int $userId = null;
    
	public function __construct()
	{
		$this->cursor = null;
		$this->filter = null;
		$this->filterGt = null;
		$this->filterGteq = null;
		$this->filterLt = null;
		$this->filterLteq = null;
		$this->perPage = null;
		$this->sortBy = null;
		$this->userId = null;
	}
}
