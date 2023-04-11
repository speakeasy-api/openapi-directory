import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that contains details about the data source of the import job.
 */
export declare class CreateImportJobRequestBodyImportDataSource extends SpeakeasyBase {
    dataFormat?: shared.DataFormatEnum;
    s3Url?: string;
}
/**
 * An object that contains details about the resource destination the import job is going to target.
 */
export declare class CreateImportJobRequestBodyImportDestination extends SpeakeasyBase {
    contactListDestination?: shared.ContactListDestination;
    suppressionListDestination?: shared.SuppressionListDestination;
}
export declare class CreateImportJobRequestBody extends SpeakeasyBase {
    /**
     * An object that contains details about the data source of the import job.
     */
    importDataSource: CreateImportJobRequestBodyImportDataSource;
    /**
     * An object that contains details about the resource destination the import job is going to target.
     */
    importDestination: CreateImportJobRequestBodyImportDestination;
}
export declare class CreateImportJobRequest extends SpeakeasyBase {
    requestBody: CreateImportJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateImportJobResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createImportJobResponse?: shared.CreateImportJobResponse;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
