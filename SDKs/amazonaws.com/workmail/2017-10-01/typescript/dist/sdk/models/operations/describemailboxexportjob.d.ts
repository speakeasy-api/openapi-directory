import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMailboxExportJobXAmzTargetEnum {
    WorkMailServiceDescribeMailboxExportJob = "WorkMailService.DescribeMailboxExportJob"
}
export declare class DescribeMailboxExportJobRequest extends SpeakeasyBase {
    describeMailboxExportJobRequest: shared.DescribeMailboxExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMailboxExportJobXAmzTargetEnum;
}
export declare class DescribeMailboxExportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMailboxExportJobResponse?: shared.DescribeMailboxExportJobResponse;
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
