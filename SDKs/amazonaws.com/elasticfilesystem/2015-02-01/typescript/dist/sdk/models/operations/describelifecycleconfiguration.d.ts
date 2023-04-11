import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeLifecycleConfigurationRequest extends SpeakeasyBase {
    /**
     * The ID of the file system whose <code>LifecycleConfiguration</code> object you want to retrieve (String).
     */
    fileSystemId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeLifecycleConfigurationResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    lifecycleConfigurationDescription?: shared.LifecycleConfigurationDescription;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
