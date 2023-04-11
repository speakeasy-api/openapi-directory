import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ScannedClinicalDocument extends SpeakeasyBase {
    /**
     * `DELETE` operation will set this field to `true`
     */
    archived?: boolean;
    date: string;
    description: string;
    /**
     * ID of the doctor who owns the document
     */
    doctor: number;
    /**
     * When creating, if you receive response as 201, but this field is `null`, please send a `GET` request with the created object's ID to retrieve the updated file URL
     */
    document: string;
    id?: number;
    /**
     * Array of tags represented as string. This should be quoted--e.g. `'["a", "b"]'`--since this endpoint requires `multipart/form-data` encoding
     */
    metatags?: string;
    /**
     * ID of the patient the document concerns
     */
    patient: number;
    updatedAt?: string;
}
