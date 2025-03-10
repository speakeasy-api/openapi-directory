<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum GrpcRetryPolicyEventEnum: string
{
    case CANCELLED = 'cancelled';
    case DEADLINE_EXCEEDED = 'deadline-exceeded';
    case INTERNAL = 'internal';
    case RESOURCE_EXHAUSTED = 'resource-exhausted';
    case UNAVAILABLE = 'unavailable';
}
