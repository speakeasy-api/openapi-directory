import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the mapping of data property keys.
 */
export declare class Mapping extends SpeakeasyBase {
    children?: Mapping[];
    dropped?: boolean;
    fromPath?: string[];
    fromType?: string;
    toKey?: string;
    toType?: string;
}
