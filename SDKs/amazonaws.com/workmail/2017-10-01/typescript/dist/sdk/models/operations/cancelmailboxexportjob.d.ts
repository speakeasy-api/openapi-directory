import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelMailboxExportJobXAmzTargetEnum {
    WorkMailServiceCancelMailboxExportJob = "WorkMailService.CancelMailboxExportJob"
}
export declare class CancelMailboxExportJobRequest extends SpeakeasyBase {
    cancelMailboxExportJobRequest: shared.CancelMailboxExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelMailboxExportJobXAmzTargetEnum;
}
export declare class CancelMailboxExportJobResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelMailboxExportJobResponse?: Record<string, any>;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
