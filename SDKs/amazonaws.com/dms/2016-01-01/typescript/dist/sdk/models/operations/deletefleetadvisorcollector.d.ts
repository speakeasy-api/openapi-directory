import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFleetAdvisorCollectorXAmzTargetEnum {
    AmazonDMSv20160101DeleteFleetAdvisorCollector = "AmazonDMSv20160101.DeleteFleetAdvisorCollector"
}
export declare class DeleteFleetAdvisorCollectorRequest extends SpeakeasyBase {
    deleteCollectorRequest: shared.DeleteCollectorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFleetAdvisorCollectorXAmzTargetEnum;
}
export declare class DeleteFleetAdvisorCollectorResponse extends SpeakeasyBase {
    /**
     * CollectorNotFoundFault
     */
    collectorNotFoundFault?: any;
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
