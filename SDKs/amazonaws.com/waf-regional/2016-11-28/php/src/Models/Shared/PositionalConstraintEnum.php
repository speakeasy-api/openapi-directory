<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum PositionalConstraintEnum: string
{
    case EXACTLY = 'EXACTLY';
    case STARTS_WITH = 'STARTS_WITH';
    case ENDS_WITH = 'ENDS_WITH';
    case CONTAINS = 'CONTAINS';
    case CONTAINS_WORD = 'CONTAINS_WORD';
}
