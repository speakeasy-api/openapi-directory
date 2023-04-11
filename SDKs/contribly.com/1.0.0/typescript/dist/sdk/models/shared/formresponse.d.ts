import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Form response saved
 */
export declare class FormResponse extends SpeakeasyBase {
    contribution?: string;
    date?: Date;
    form?: string;
    id?: string;
    responses?: Record<string, string>;
    user?: string;
}
