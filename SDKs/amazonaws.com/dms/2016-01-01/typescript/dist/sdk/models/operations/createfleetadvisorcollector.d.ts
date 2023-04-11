import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFleetAdvisorCollectorXAmzTargetEnum {
    AmazonDMSv20160101CreateFleetAdvisorCollector = "AmazonDMSv20160101.CreateFleetAdvisorCollector"
}
export declare class CreateFleetAdvisorCollectorRequest extends SpeakeasyBase {
    createFleetAdvisorCollectorRequest: shared.CreateFleetAdvisorCollectorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFleetAdvisorCollectorXAmzTargetEnum;
}
export declare class CreateFleetAdvisorCollectorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * Success
     */
    createFleetAdvisorCollectorResponse?: shared.CreateFleetAdvisorCollectorResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * ResourceQuotaExceededFault
     */
    resourceQuotaExceededFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * S3AccessDeniedFault
     */
    s3AccessDeniedFault?: any;
    /**
     * S3ResourceNotFoundFault
     */
    s3ResourceNotFoundFault?: any;
}
