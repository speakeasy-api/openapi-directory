import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ConsentForm extends SpeakeasyBase {
    archived?: boolean;
    /**
     * If true, consent form will always be automatically assigned to appointments
     */
    assignByDefault: boolean;
    createdAt?: string;
    doctor: number;
    id?: number;
    /**
     * If true, consent form must be signed prior to appointment check in
     */
    isMandatory: boolean;
    /**
     * The order of consent forms that will show in management screen
     */
    order?: number;
    title: string;
    updatedAt?: string;
    /**
     * Files are passed using `multipart/form-data` encoding, but returned as URLs.
     */
    uri: string;
}
