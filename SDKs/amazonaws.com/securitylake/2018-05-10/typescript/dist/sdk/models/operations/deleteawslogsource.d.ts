import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteAwsLogSourceRequestBody extends SpeakeasyBase {
    /**
     * Removes the specific Amazon Web Services sources from specific accounts and specific Regions.
     */
    disableAllDimensions?: Record<string, Record<string, string[]>>;
    /**
     * Removes all Amazon Web Services sources from specific accounts or Regions.
     */
    disableSingleDimension?: string[];
    /**
     * Remove a specific Amazon Web Services source from specific accounts or Regions.
     */
    disableTwoDimensions?: Record<string, string[]>;
    /**
     * This is a mandatory input. Specify the input order to disable dimensions in Security Lake, namely Region (Amazon Web Services Region code, source type, and member (account ID of a specific Amazon Web Services account).
     */
    inputOrder: shared.DimensionEnum[];
}
export declare class DeleteAwsLogSourceRequest extends SpeakeasyBase {
    requestBody: DeleteAwsLogSourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAwsLogSourceResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteAwsLogSourceResponse?: shared.DeleteAwsLogSourceResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
