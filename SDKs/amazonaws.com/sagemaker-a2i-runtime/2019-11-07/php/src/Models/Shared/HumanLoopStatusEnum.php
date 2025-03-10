<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum HumanLoopStatusEnum: string
{
    case IN_PROGRESS = 'InProgress';
    case FAILED = 'Failed';
    case COMPLETED = 'Completed';
    case STOPPED = 'Stopped';
    case STOPPING = 'Stopping';
}
