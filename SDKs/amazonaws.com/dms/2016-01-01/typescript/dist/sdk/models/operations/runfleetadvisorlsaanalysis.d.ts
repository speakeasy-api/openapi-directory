import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RunFleetAdvisorLsaAnalysisXAmzTargetEnum {
    AmazonDMSv20160101RunFleetAdvisorLsaAnalysis = "AmazonDMSv20160101.RunFleetAdvisorLsaAnalysis"
}
export declare class RunFleetAdvisorLsaAnalysisRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RunFleetAdvisorLsaAnalysisXAmzTargetEnum;
}
export declare class RunFleetAdvisorLsaAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    /**
     * Success
     */
    runFleetAdvisorLsaAnalysisResponse?: shared.RunFleetAdvisorLsaAnalysisResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
