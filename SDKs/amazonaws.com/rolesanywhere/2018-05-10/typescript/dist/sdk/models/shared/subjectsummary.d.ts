import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A summary representation of Subject resources returned in read operations; primarily ListSubjects.
 */
export declare class SubjectSummary extends SpeakeasyBase {
    createdAt?: Date;
    enabled?: boolean;
    lastSeenAt?: Date;
    subjectArn?: string;
    subjectId?: string;
    updatedAt?: Date;
    x509Subject?: string;
}
