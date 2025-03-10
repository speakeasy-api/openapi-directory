<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/** Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`. */
enum ChecksListForRefFilterEnum: string
{
    case LATEST = 'latest';
    case ALL = 'all';
}
