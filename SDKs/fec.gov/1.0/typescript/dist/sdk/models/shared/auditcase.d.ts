import { SpeakeasyBase } from "../../../internal/utils";
import { AuditCaseCategoryRelation } from "./auditcasecategoryrelation";
export declare class AuditCase extends SpeakeasyBase {
    auditCaseId?: string;
    auditId?: number;
    candidateId?: string;
    candidateName?: string;
    committeeDescription?: string;
    committeeDesignation?: string;
    committeeId?: string;
    committeeName?: string;
    committeeType?: string;
    cycle?: number;
    farReleaseDate?: Date;
    /**
     *
     * @remarks
     * URL for retrieving the PDF document
     *
     */
    linkToReport?: string;
    primaryCategoryList?: AuditCaseCategoryRelation[];
}
