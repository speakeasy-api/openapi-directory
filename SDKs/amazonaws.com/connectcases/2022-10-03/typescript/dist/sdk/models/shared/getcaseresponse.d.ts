import { SpeakeasyBase } from "../../../internal/utils";
import { FieldValue } from "./fieldvalue";
/**
 * Success
 */
export declare class GetCaseResponse extends SpeakeasyBase {
    fields: FieldValue[];
    nextToken?: string;
    tags?: Record<string, string>;
    templateId: string;
}
