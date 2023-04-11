import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A map of key value pairs that is generated when you create a migration workflow. The key value pairs will differ based on your selection of the template.
 */
export declare class StepInput extends SpeakeasyBase {
    integerValue?: number;
    listOfStringsValue?: string[];
    mapOfStringValue?: Record<string, string>;
    stringValue?: string;
}
