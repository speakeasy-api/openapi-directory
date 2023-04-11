import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportHubContentXAmzTargetEnum {
    SageMakerImportHubContent = "SageMaker.ImportHubContent"
}
export declare class ImportHubContentRequest extends SpeakeasyBase {
    importHubContentRequest: shared.ImportHubContentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportHubContentXAmzTargetEnum;
}
export declare class ImportHubContentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    importHubContentResponse?: shared.ImportHubContentResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
