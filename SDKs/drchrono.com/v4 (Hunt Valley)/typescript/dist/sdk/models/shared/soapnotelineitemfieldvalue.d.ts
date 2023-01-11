import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Values entered by doctor when charting a particular appointment
**/
export declare class SoapNoteLineItemFieldValue extends SpeakeasyBase {
    appointment: number;
    clinicalNoteField: number;
    createdAt?: string;
    id?: number;
    updatedAt?: string;
    value: string;
}
