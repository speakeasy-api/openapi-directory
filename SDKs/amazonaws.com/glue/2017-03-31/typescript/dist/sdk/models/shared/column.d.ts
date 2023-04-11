import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A column in a <code>Table</code>.
 */
export declare class Column extends SpeakeasyBase {
    comment?: string;
    name: string;
    parameters?: Record<string, string>;
    type?: string;
}
