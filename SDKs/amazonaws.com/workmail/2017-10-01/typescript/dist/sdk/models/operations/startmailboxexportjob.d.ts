import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartMailboxExportJobXAmzTargetEnum {
    WorkMailServiceStartMailboxExportJob = "WorkMailService.StartMailboxExportJob"
}
export declare class StartMailboxExportJobRequest extends SpeakeasyBase {
    startMailboxExportJobRequest: shared.StartMailboxExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMailboxExportJobXAmzTargetEnum;
}
export declare class StartMailboxExportJobResponse extends SpeakeasyBase {
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
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    /**
     * Success
     */
    startMailboxExportJobResponse?: shared.StartMailboxExportJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
