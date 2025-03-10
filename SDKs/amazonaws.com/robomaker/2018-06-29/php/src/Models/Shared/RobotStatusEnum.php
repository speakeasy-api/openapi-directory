<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum RobotStatusEnum: string
{
    case AVAILABLE = 'Available';
    case REGISTERED = 'Registered';
    case PENDING_NEW_DEPLOYMENT = 'PendingNewDeployment';
    case DEPLOYING = 'Deploying';
    case FAILED = 'Failed';
    case IN_SYNC = 'InSync';
    case NO_RESPONSE = 'NoResponse';
}
