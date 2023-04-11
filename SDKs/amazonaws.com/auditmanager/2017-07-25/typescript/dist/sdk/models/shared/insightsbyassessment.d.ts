import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A summary of the latest analytics data for a specific active assessment.</p> <p>This summary is a snapshot of the data that was collected on the <code>lastUpdated</code> date. It’s important to understand that the totals in <code>InsightsByAssessment</code> are daily counts based on this date — they aren’t a total sum to date. </p> <p>The <code>InsightsByAssessment</code> data is eventually consistent. This means that when you read data from <code>InsightsByAssessment</code>, the response might not instantly reflect the results of a recently completed write or update operation. If you repeat your read request after a few hours, the response returns the latest data.</p> <note> <p>If you delete an assessment or change its status to inactive, <code>InsightsByAssessment</code> includes data for that assessment as follows.</p> <ul> <li> <p> <b>Inactive assessments</b> - If Audit Manager collected evidence for your assessment before you changed it inactive, that evidence is included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> <li> <p> <b>Deleted assessments</b> - If Audit Manager collected evidence for your assessment before you deleted it, that evidence isn't included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> </ul> </note>
 */
export declare class InsightsByAssessment extends SpeakeasyBase {
    assessmentControlsCountByNoncompliantEvidence?: number;
    compliantEvidenceCount?: number;
    inconclusiveEvidenceCount?: number;
    lastUpdated?: Date;
    noncompliantEvidenceCount?: number;
    totalAssessmentControlsCount?: number;
}
