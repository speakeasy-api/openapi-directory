<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum AssessmentRunStateEnum: string
{
    case CREATED = 'CREATED';
    case START_DATA_COLLECTION_PENDING = 'START_DATA_COLLECTION_PENDING';
    case START_DATA_COLLECTION_IN_PROGRESS = 'START_DATA_COLLECTION_IN_PROGRESS';
    case COLLECTING_DATA = 'COLLECTING_DATA';
    case STOP_DATA_COLLECTION_PENDING = 'STOP_DATA_COLLECTION_PENDING';
    case DATA_COLLECTED = 'DATA_COLLECTED';
    case START_EVALUATING_RULES_PENDING = 'START_EVALUATING_RULES_PENDING';
    case EVALUATING_RULES = 'EVALUATING_RULES';
    case FAILED = 'FAILED';
    case ERROR = 'ERROR';
    case COMPLETED = 'COMPLETED';
    case COMPLETED_WITH_ERRORS = 'COMPLETED_WITH_ERRORS';
    case CANCELED = 'CANCELED';
}
