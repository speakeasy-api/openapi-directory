<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum CloudComponentStateEnum: string
{
    case REQUESTED = 'REQUESTED';
    case INITIATED = 'INITIATED';
    case DEPLOYABLE = 'DEPLOYABLE';
    case FAILED = 'FAILED';
    case DEPRECATED = 'DEPRECATED';
}
