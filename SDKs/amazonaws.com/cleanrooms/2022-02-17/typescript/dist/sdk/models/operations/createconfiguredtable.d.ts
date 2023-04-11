import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The analysis method for the configured tables. The only valid value is currently `DIRECT_QUERY`.
 */
export declare enum CreateConfiguredTableRequestBodyAnalysisMethodEnum {
    DirectQuery = "DIRECT_QUERY"
}
/**
 * A pointer to the dataset that underlies this table. Currently, this can only be an AWS Glue table.
 */
export declare class CreateConfiguredTableRequestBodyTableReference extends SpeakeasyBase {
    glue?: shared.GlueTableReference;
}
export declare class CreateConfiguredTableRequestBody extends SpeakeasyBase {
    /**
     * The columns of the underlying table that can be used by collaborations or analysis rules.
     */
    allowedColumns: string[];
    /**
     * The analysis method for the configured tables. The only valid value is currently `DIRECT_QUERY`.
     */
    analysisMethod: CreateConfiguredTableRequestBodyAnalysisMethodEnum;
    /**
     * A description for the configured table.
     */
    description?: string;
    /**
     * The name of the configured table.
     */
    name: string;
    /**
     * A pointer to the dataset that underlies this table. Currently, this can only be an AWS Glue table.
     */
    tableReference: CreateConfiguredTableRequestBodyTableReference;
    /**
     * Map of tags assigned to a resource
     */
    tags?: Record<string, string>;
}
export declare class CreateConfiguredTableRequest extends SpeakeasyBase {
    requestBody: CreateConfiguredTableRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateConfiguredTableResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createConfiguredTableOutput?: shared.CreateConfiguredTableOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
