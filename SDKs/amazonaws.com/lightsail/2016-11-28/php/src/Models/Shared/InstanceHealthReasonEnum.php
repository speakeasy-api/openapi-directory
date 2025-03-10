<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum InstanceHealthReasonEnum: string
{
    case LB_REGISTRATION_IN_PROGRESS = 'Lb.RegistrationInProgress';
    case LB_INITIAL_HEALTH_CHECKING = 'Lb.InitialHealthChecking';
    case LB_INTERNAL_ERROR = 'Lb.InternalError';
    case INSTANCE_RESPONSE_CODE_MISMATCH = 'Instance.ResponseCodeMismatch';
    case INSTANCE_TIMEOUT = 'Instance.Timeout';
    case INSTANCE_FAILED_HEALTH_CHECKS = 'Instance.FailedHealthChecks';
    case INSTANCE_NOT_REGISTERED = 'Instance.NotRegistered';
    case INSTANCE_NOT_IN_USE = 'Instance.NotInUse';
    case INSTANCE_DEREGISTRATION_IN_PROGRESS = 'Instance.DeregistrationInProgress';
    case INSTANCE_INVALID_STATE = 'Instance.InvalidState';
    case INSTANCE_IP_UNUSABLE = 'Instance.IpUnusable';
}
