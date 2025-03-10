<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


enum MLModelFilterVariableEnum: string
{
    case CREATED_AT = 'CreatedAt';
    case LAST_UPDATED_AT = 'LastUpdatedAt';
    case STATUS = 'Status';
    case NAME = 'Name';
    case IAM_USER = 'IAMUser';
    case TRAINING_DATA_SOURCE_ID = 'TrainingDataSourceId';
    case REALTIME_ENDPOINT_STATUS = 'RealtimeEndpointStatus';
    case ML_MODEL_TYPE = 'MLModelType';
    case ALGORITHM = 'Algorithm';
    case TRAINING_DATA_URI = 'TrainingDataURI';
}
