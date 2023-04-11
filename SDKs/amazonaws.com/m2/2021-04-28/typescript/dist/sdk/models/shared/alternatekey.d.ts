import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines an alternate key. This value is optional. A legacy data set might not have any alternate key defined but if those alternate keys definitions exist, provide them, as some applications will make use of them.
 */
export declare class AlternateKey extends SpeakeasyBase {
    allowDuplicates?: boolean;
    length: number;
    name?: string;
    offset: number;
}
