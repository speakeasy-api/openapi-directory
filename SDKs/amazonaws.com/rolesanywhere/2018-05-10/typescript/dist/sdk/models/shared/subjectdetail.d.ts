import { SpeakeasyBase } from "../../../internal/utils";
import { CredentialSummary } from "./credentialsummary";
import { InstanceProperty } from "./instanceproperty";
/**
 * The state of the subject after a read or write operation.
 */
export declare class SubjectDetail extends SpeakeasyBase {
    createdAt?: Date;
    credentials?: CredentialSummary[];
    enabled?: boolean;
    instanceProperties?: InstanceProperty[];
    lastSeenAt?: Date;
    subjectArn?: string;
    subjectId?: string;
    updatedAt?: Date;
    x509Subject?: string;
}
