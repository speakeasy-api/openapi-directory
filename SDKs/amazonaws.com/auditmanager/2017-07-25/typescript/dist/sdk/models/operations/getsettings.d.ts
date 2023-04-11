import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The list of setting attribute enum values.
 */
export declare enum GetSettingsAttributeEnum {
    All = "ALL",
    IsAwsOrgEnabled = "IS_AWS_ORG_ENABLED",
    SnsTopic = "SNS_TOPIC",
    DefaultAssessmentReportsDestination = "DEFAULT_ASSESSMENT_REPORTS_DESTINATION",
    DefaultProcessOwners = "DEFAULT_PROCESS_OWNERS",
    EvidenceFinderEnablement = "EVIDENCE_FINDER_ENABLEMENT",
    DeregistrationPolicy = "DEREGISTRATION_POLICY"
}
export declare class GetSettingsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     *  The list of setting attribute enum values.
     */
    attribute: GetSettingsAttributeEnum;
}
export declare class GetSettingsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getSettingsResponse?: shared.GetSettingsResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
