import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about what created the incident record and when it was created.
 */
export declare class IncidentRecordSource extends SpeakeasyBase {
    createdBy: string;
    invokedBy?: string;
    resourceArn?: string;
    source: string;
}
