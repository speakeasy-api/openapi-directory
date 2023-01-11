import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScannedClinicalDocument extends SpeakeasyBase {
    archived?: boolean;
    date: string;
    description: string;
    doctor: number;
    document: string;
    id?: number;
    metatags?: string;
    patient: number;
    updatedAt?: string;
}
