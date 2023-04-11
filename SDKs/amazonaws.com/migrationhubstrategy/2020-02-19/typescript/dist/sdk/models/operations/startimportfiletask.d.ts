import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the source that the servers are coming from. By default, Strategy Recommendations assumes that the servers specified in the import file are available in AWS Application Discovery Service.
 */
export declare enum StartImportFileTaskRequestBodyDataSourceTypeEnum {
    ApplicationDiscoveryService = "ApplicationDiscoveryService",
    Mpa = "MPA",
    Import = "Import"
}
export declare class StartImportFileTaskRequestBody extends SpeakeasyBase {
    /**
     *  The S3 bucket where the import file is located. The bucket name is required to begin with <code>migrationhub-strategy-</code>.
     */
    s3Bucket: string;
    /**
     * Specifies the source that the servers are coming from. By default, Strategy Recommendations assumes that the servers specified in the import file are available in AWS Application Discovery Service.
     */
    dataSourceType?: StartImportFileTaskRequestBodyDataSourceTypeEnum;
    /**
     * Groups the resources in the import file together with a unique name. This ID can be as filter in <code>ListApplicationComponents</code> and <code>ListServers</code>.
     */
    groupId?: shared.Group[];
    /**
     *  A descriptive name for the request.
     */
    name: string;
    /**
     *  The S3 bucket where Strategy Recommendations uploads import results. The bucket name is required to begin with migrationhub-strategy-.
     */
    s3bucketForReportData?: string;
    /**
     *  The Amazon S3 key name of the import file.
     */
    s3key: string;
}
export declare class StartImportFileTaskRequest extends SpeakeasyBase {
    requestBody: StartImportFileTaskRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartImportFileTaskResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startImportFileTaskResponse?: shared.StartImportFileTaskResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
