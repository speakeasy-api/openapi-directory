import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The updated note.
 */
export declare class BatchUpdateFindingsRequestBodyNote extends SpeakeasyBase {
    text?: string;
    updatedBy?: string;
}
/**
 * Updates to the severity information for a finding.
 */
export declare class BatchUpdateFindingsRequestBodySeverity extends SpeakeasyBase {
    label?: shared.SeverityLabelEnum;
    normalized?: number;
    product?: number;
}
/**
 * <p>Indicates the veracity of a finding.</p> <p>The available values for <code>VerificationState</code> are as follows.</p> <ul> <li> <p> <code>UNKNOWN</code> – The default disposition of a security finding</p> </li> <li> <p> <code>TRUE_POSITIVE</code> – The security finding is confirmed</p> </li> <li> <p> <code>FALSE_POSITIVE</code> – The security finding was determined to be a false alarm</p> </li> <li> <p> <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where the finding doesn't pose any threat, is expected, or both</p> </li> </ul>
 */
export declare enum BatchUpdateFindingsRequestBodyVerificationStateEnum {
    Unknown = "UNKNOWN",
    TruePositive = "TRUE_POSITIVE",
    FalsePositive = "FALSE_POSITIVE",
    BenignPositive = "BENIGN_POSITIVE"
}
/**
 * Used to update information about the investigation into the finding.
 */
export declare class BatchUpdateFindingsRequestBodyWorkflow extends SpeakeasyBase {
    status?: shared.WorkflowStatusEnum;
}
export declare class BatchUpdateFindingsRequestBody extends SpeakeasyBase {
    /**
     * <p>The updated value for the finding confidence. Confidence is defined as the likelihood that a finding accurately identifies the behavior or issue that it was intended to identify.</p> <p>Confidence is scored on a 0-100 basis using a ratio scale, where 0 means zero percent confidence and 100 means 100 percent confidence.</p>
     */
    confidence?: number;
    /**
     * <p>The updated value for the level of importance assigned to the resources associated with the findings.</p> <p>A score of 0 means that the underlying resources have no criticality, and a score of 100 is reserved for the most critical resources. </p>
     */
    criticality?: number;
    /**
     * <p>The list of findings to update. <code>BatchUpdateFindings</code> can be used to update up to 100 findings at a time.</p> <p>For each finding, the list provides the finding identifier and the ARN of the finding provider.</p>
     */
    findingIdentifiers: shared.AwsSecurityFindingIdentifier[];
    /**
     * The updated note.
     */
    note?: BatchUpdateFindingsRequestBodyNote;
    /**
     * A list of findings that are related to the updated findings.
     */
    relatedFindings?: shared.RelatedFinding[];
    /**
     * Updates to the severity information for a finding.
     */
    severity?: BatchUpdateFindingsRequestBodySeverity;
    /**
     * <p>One or more finding types in the format of namespace/category/classifier that classify a finding.</p> <p>Valid namespace values are as follows.</p> <ul> <li> <p>Software and Configuration Checks</p> </li> <li> <p>TTPs</p> </li> <li> <p>Effects</p> </li> <li> <p>Unusual Behaviors</p> </li> <li> <p>Sensitive Data Identifications </p> </li> </ul>
     */
    types?: string[];
    /**
     * A list of name/value string pairs associated with the finding. These are custom, user-defined fields added to a finding.
     */
    userDefinedFields?: Record<string, string>;
    /**
     * <p>Indicates the veracity of a finding.</p> <p>The available values for <code>VerificationState</code> are as follows.</p> <ul> <li> <p> <code>UNKNOWN</code> – The default disposition of a security finding</p> </li> <li> <p> <code>TRUE_POSITIVE</code> – The security finding is confirmed</p> </li> <li> <p> <code>FALSE_POSITIVE</code> – The security finding was determined to be a false alarm</p> </li> <li> <p> <code>BENIGN_POSITIVE</code> – A special case of <code>TRUE_POSITIVE</code> where the finding doesn't pose any threat, is expected, or both</p> </li> </ul>
     */
    verificationState?: BatchUpdateFindingsRequestBodyVerificationStateEnum;
    /**
     * Used to update information about the investigation into the finding.
     */
    workflow?: BatchUpdateFindingsRequestBodyWorkflow;
}
export declare class BatchUpdateFindingsRequest extends SpeakeasyBase {
    requestBody: BatchUpdateFindingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchUpdateFindingsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchUpdateFindingsResponse?: shared.BatchUpdateFindingsResponse;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
