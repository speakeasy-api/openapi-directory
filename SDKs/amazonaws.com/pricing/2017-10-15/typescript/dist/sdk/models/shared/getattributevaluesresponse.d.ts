import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * Success
 */
export declare class GetAttributeValuesResponse extends SpeakeasyBase {
    attributeValues?: AttributeValue[];
    nextToken?: string;
}
